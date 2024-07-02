require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const moment = require('moment');
const Appointment = require('../model/Appointment');
const isCancellable = require('../utilities/isCancellable');

const createCheckout = async (req, res) => {
  try {
    const lineItems = [];
    let totalPrice = 0;
    req.body.forEach((appointment) => {
      totalPrice += appointment.price;

      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Skultes Gym rezervācija',
            description: `${appointment.date} ${appointment.range.start.time} - ${appointment.range.end.time}`,
          },
          unit_amount: appointment.price,
        },
        quantity: 1,
      });
    });

    const currentTime = new Date().getTime();
    const thirtyMinutesFromNow = currentTime + 30 * 60 * 1000;

    const sessionObject =
      totalPrice < 4500
        ? {
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.FRONT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: process.env.FRONT_URL,
            expires_at: Math.floor(thirtyMinutesFromNow / 1000),
            allow_promotion_codes: true,
          }
        : {
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.FRONT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: process.env.FRONT_URL,
            expires_at: Math.floor(thirtyMinutesFromNow / 1000),
            discounts: [{ coupon: process.env.SKULTES_DISCOUNT }],
          };

    console.log(sessionObject);

    const session = await stripe.checkout.sessions.create(sessionObject);

    const appointments = req.body.map((appointment) => ({
      ...appointment,
      checkout: session.id,
    }));

    const createdAppointments = await Appointment.insertMany(appointments);
    console.log(createdAppointments);

    res.send({ id: session.id, url: session.url });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

const getCheckoutSession = async (req, res) => {
  try {
    console.log('Getting session', req.params.id);

    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    const appointments = await Appointment.find({
      checkout: req.params.id,
      status: 'paid',
    });

    const appointmentData = appointments.map((appointment) => {
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        'Skultes Gym apmeklējums'
      )}&location=${encodeURIComponent(
        'Skultes, Tumes pagasts'
      )}&dates=${encodeURIComponent(
        appointment.date.toISOString().slice(0, 10).replaceAll('-', '')
      )}T${encodeURIComponent(
        appointment.range.start.time.replace(':', '')
      )}00/${encodeURIComponent(
        appointment.date.toISOString().slice(0, 10).replaceAll('-', '')
      )}T${encodeURIComponent(appointment.range.end.time.replace(':', ''))}00`;

      return {
        id: appointment.id,
        cancellable: isCancellable(appointment),
        date: moment(appointment.date).format('DD.MM.YYYY'),
        start: appointment.range.start.time,
        end: appointment.range.end.time,
        add_to_calendar: calendarUrl,
      };
    });

    res.send({
      payment_status: session.payment_status,
      payment_data: appointmentData,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ msg: error.message });
  }
};

module.exports = { createCheckout, getCheckoutSession };
