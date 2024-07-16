const moment = require('moment');
const Appointment = require('../model/Appointment');
const pricing = require('../config/pricing');
const timeslots = require('../config/timeslots');
const calculatePricing = require('../utilities/calculatePricing');

const createAppointmentMiddleware = async (req, res, next) => {
  const cart = [];
  try {
    const conflictingAppointments = req.body.map((appointment) => {
      const price = calculatePricing(
        appointment.start_index,
        appointment.end_index,
        appointment.date
      );

      if (!price) {
        return res.status(400).send({
          msg: 'Bad request: No pricing available for this timeslot range!',
        });
      }

      cart.push({
        name: appointment.name,
        phone: appointment.phone,
        date: appointment.date,
        range: {
          start: {
            index: appointment.start_index,
            time: timeslots[appointment.start_index],
          },
          end: {
            index: appointment.end_index,
            time: timeslots[appointment.end_index],
          },
        },
        price: price * 100,
      });
      // Check for overlapping appointments
      const inputStart = moment(appointment.date).startOf('day').toDate();
      const inputEnd = moment(appointment.date).endOf('day').toDate();

      return Appointment.find({
        date: {
          $gte: inputStart,
          $lte: inputEnd,
        },
        status: 'paid' || 'cart',
        $or: [
          {
            'range.start.index': { $lt: appointment.end_index },
            'range.end.index': { $gt: appointment.start_index },
          },
          {
            $and: [
              {
                'range.start.index': {
                  $gte: appointment.start_index,
                  $lt: appointment.end_index,
                },
              },
              { 'range.end.index': { $gt: appointment.end_index } },
            ],
          },
          {
            $and: [
              { 'range.start.index': { $lt: appointment.start_index } },
              {
                'range.end.index': {
                  $lte: appointment.end_index,
                  $gt: appointment.start_index,
                },
              },
            ],
          },
        ],
      });
    });

    // Process appointments asynchronously
    const results = await Promise.all(conflictingAppointments);

    const conflictingTimeslots = results.flatMap((appointments) =>
      appointments.map(
        (appointment) =>
          `${appointment.range.start.time}-${appointment.range.end.time}`
      )
    );

    const uniqueConflictingTimeslots = [...new Set(conflictingTimeslots)];

    // Check if any results indicate overlapping appointments
    const hasOverlap = results.some((appointments) => appointments.length > 0);
    if (hasOverlap) {
      return res.status(409).send({
        msg: 'Kāds no izvēlētajiem laikiem jau ticis rezervēts vai šobrīd tiek apstrādāts',
        conflicts: uniqueConflictingTimeslots,
      });
    }

    // Move to the next middleware/route handler
    req.body = cart;
    next();
    return cart;
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: 'Internal server error' });
  }
};

module.exports = { createAppointmentMiddleware };
