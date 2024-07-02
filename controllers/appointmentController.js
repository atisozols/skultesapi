const moment = require('moment-timezone');
const Appointment = require('../model/Appointment');
const eventController = require('./eventController');
const isCancelledString = require('../utilities/cancelledStatusCheck');
const isCancellable = require('../utilities/isCancellable');
const stripe = require('stripe')(process.env.STRIPE_KEY);

const getAvailability = async (req, res) => {
  try {
    const currentDay = moment().tz('Europe/Riga').startOf('day').utc(true);

    // Generate an array of dates for the whole week
    const weekDates = [];
    for (let i = 0; i < 14; i += 1) {
      const date = moment(currentDay).add(i, 'days');
      weekDates.push(date.startOf('day').toDate());
    }

    // Fetch availability data from the database
    const unavailableRanges = await Appointment.aggregate([
      {
        $match: {
          date: { $gte: currentDay.toDate() },
          status: 'paid',
        },
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' },
            day: { $dayOfMonth: '$date' },
          },
          ranges: { $push: '$range' },
        },
      },
    ]);

    // Merge availability data with the whole week's dates
    const availability = weekDates.map((date) => {
      const foundAvailability = unavailableRanges.find((avail) => {
        // eslint-disable-next-line no-underscore-dangle
        const { year, month, day } = avail._id;
        const availDate = new Date(year, month - 1, day);
        return moment(date).isSame(availDate, 'day');
      });

      return {
        date,
        ranges: foundAvailability ? foundAvailability.ranges : [],
      };
    });

    res.json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.body;
    let response = {};
    const appointment = await Appointment.findById(id);

    if (isCancelledString(appointment.status)) {
      response = {
        message: 'Appointment already deleted',
        coupon: appointment.status.split('-')[1],
        price: appointment.price,
      };
    } else if (appointment.status !== 'paid') {
      response = {
        message: 'Appointment already cancelled or not yet paid for',
        coupon: null,
        price: null,
      };
    } else if (!isCancellable(appointment)) {
      appointment.status = `cancelled`;
      await appointment.save();

      await eventController.removeEventFromCalendar(
        appointment,
        eventController.calendarInstance
      );

      response = {
        message: 'Appointment deleted',
        coupon: null,
        price: null,
      };
    } else {
      const coupon = await stripe.coupons.create({
        amount_off: appointment.price,
        currency: 'EUR',
        duration: 'once',
      });

      const promotionCode = await stripe.promotionCodes.create({
        coupon: coupon.id,
        max_redemptions: 1,
      });

      appointment.status = `cancelled-${promotionCode.code}`;
      await appointment.save();

      await eventController.removeEventFromCalendar(
        appointment,
        eventController.calendarInstance
      );

      response = {
        message: 'Appointment deleted',
        coupon: promotionCode.code,
        price: appointment.price,
      };
    }

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      message: error.message,
      coupon: null,
      price: null,
    });
  }
};

module.exports = { getAvailability, cancelAppointment };
