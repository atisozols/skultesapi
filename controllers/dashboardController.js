const { users } = require('@clerk/clerk-sdk-node');
const moment = require('moment');
const knexInstance = require('../config/knex');

const getData = async (req, res) => {
  try {
    if (!req.auth.sessionId) res.status(403).send({ message: 'Unauthenticated' });

    const { userId } = req.auth;
    const user = await users.getUser(userId);

    const existingSubscription = await knexInstance.queryBuilder().from('subscriptions')
      .where('user_id', userId)
      .first();

    if (!existingSubscription) {
      await knexInstance.queryBuilder().from('subscriptions').insert({ user_id: userId });
      console.log(`${user.firstName} ${user.lastName} subscription created`);
    }

    const userAppointments = await knexInstance.queryBuilder().from('appointments')
      .where('user_id', userId);

    const appointmentsModified = userAppointments.map((appointment) => {
      const modifiedAppointment = { ...appointment };
      modifiedAppointment.date = moment(appointment.date).utc(true);
      modifiedAppointment.start_time = modifiedAppointment.start_time.slice(0, 5);
      modifiedAppointment.end_time = modifiedAppointment.end_time.slice(0, 5);

      return modifiedAppointment;
    });

    appointmentsModified.sort((a, b) => {
      // First, sort by date
      const dateComparison = a.date - b.date;
      if (dateComparison !== 0) {
        return dateComparison;
      }

      // If dates are equal, sort by start_time
      return a.start_time.localeCompare(b.start_time);
    });

    const userSubscription = await knexInstance.queryBuilder().from('subscriptions')
      .where('user_id', userId)
      .first();

    userSubscription.expiry_date = moment(userSubscription.expiry_date).utc(true);

    res.status(200).json({ appointments: appointmentsModified, subscription: userSubscription });
  } catch (error) {
    res.status(403).send({ error: error.message });
  }
};

const deleteAppointemnt = async (req, res) => {
  try {
    if (!req.auth.sessionId || req.auth.userId !== req.body.user_id) res.status(403).send({ message: 'Unauthenticated' });
    const { userId } = req.auth;
    const user = await users.getUser(userId);
    console.log(`${user.firstName} ${user.lastName} cancelling appointment ${req.body.id}`);

    await knexInstance.transaction(async (trx) => {
      const appointmentId = req.body.id;
      const appointmentDate = new Date(req.body.date).toDateString();

      const deletableAppointment = await trx('appointments')
        .where('id', appointmentId)
        .first();

      await trx('appointments')
        .where('id', appointmentId)
        .del();

      const today = new Date().toDateString();
      const fifteenMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      console.log(`created at ${deletableAppointment.created_at}, 15mins ago the timestamp was ${fifteenMinutesAgo}`);

      // Increment the user's subscription balance if the dates are different
      if (today !== appointmentDate || deletableAppointment.created_at >= fifteenMinutesAgo) {
        const incrementAmount = deletableAppointment.start_index < 35 ? 1 : 2;
        await trx('subscriptions')
          .where('user_id', user.id)
          .increment('balance', incrementAmount);
        console.log(`Subscription for ${user.id} incremented by ${incrementAmount}`);
      }
    });

    console.log(`Appointment ${req.body.id} cancelled`);
    res.status(200).send({ message: 'Appointment cancelled' });
  } catch (error) {
    res.status(403).send(error.message);
  }
};

const addAppointments = async (req, res) => {
  try {
    if (!req.auth.sessionId) res.status(403).send({ message: 'Unauthenticated' });
    const { userId } = req.auth;
    const appointments = req.body;

    const userSubscription = await knexInstance('subscriptions')
      .where('user_id', userId)
      .first();

    if (!userSubscription || new Date(userSubscription.expiry_date) < new Date()) {
      res.status(409).send({ message: 'Subscription expired', insufficient: true, overlap: false });
    }

    await Promise.all(appointments.map(async (appointment) => {
      await knexInstance('appointments').insert({
        user_id: userId,
        date: appointment.date,
        start_index: appointment.start_index,
        end_index: appointment.end_index,
      });
    }));

    res.status(201).send({ message: 'Added' });
  } catch (error) {
    if (error.message.includes('subscriptions_balance_check')) {
      res.status(409).send({ message: error.message, insufficient: true, overlap: false });
    }
    res.status(409).send({ message: error.message, insufficient: false, overlap: true });
  }
};

module.exports = { getData, deleteAppointemnt, addAppointments };
