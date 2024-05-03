require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const moment = require('moment');
const pricing = require('../config/pricing');

const createCheckout = async (req, res) => {
  try {
    if (!req.auth.sessionId && !req.auth.userId) res.status(403).send({ message: 'Unauthenticated' });
    if (!pricing[req.body.count]) res.status(400).send({ message: 'No pricing for this count off appointments' });

    const { userId } = req.auth;

    const lineItems = [];
    lineItems.push({
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'Skultes Gym abonements',
          description: `${req.body.count} apmeklējum${req.body.count < 2 ? 's' : 'i'} Termiņš: ${moment().add(2, 'months').format('DD.MM.YYYY')}`,
        },
        unit_amount: pricing[req.body.count],
      },
      quantity: 1,
    });

    const currentTime = new Date().getTime();
    const thirtyMinutesFromNow = currentTime + (30 * 60 * 1000);

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.FRONT_URL}/subscription`,
      cancel_url: `${process.env.FRONT_URL}/subscription/buy`,
      expires_at: Math.floor(thirtyMinutesFromNow / 1000),
      allow_promotion_codes: true,
      metadata: {
        user: userId,
        count: req.body.count,
      },
    });

    res.send({ url: session.url });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCheckoutSession = async (req, res) => {
  try {
    console.log('Getting session', req.params.id);
    res.status(200).send({ ok: 'ok' });

    // const session = await stripe.checkout.sessions.retrieve(req.params.id);
    // const appointments = await Appointment.find({
    //   checkout: req.params.id,
    // });

    // const appointmentData = appointments.map((appointment) => {
    //   const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Skultes Gym apmeklējums')}&location=${encodeURIComponent('Skultes, Tumes pagasts')}&dates=${encodeURIComponent(appointment.date.toISOString().slice(0, 10).replaceAll('-', ''))}T${encodeURIComponent(appointment.range.start.time.replace(':', ''))}00/${encodeURIComponent(appointment.date.toISOString().slice(0, 10).replaceAll('-', ''))}T${encodeURIComponent(appointment.range.end.time.replace(':', ''))}00`;

    //   return {
    //     date: moment(appointment.date).format('DD.MM.YYYY'),
    //     start: appointment.range.start.time,
    //     end: appointment.range.end.time,
    //     add_to_calendar: calendarUrl,
    //   };
    // });

    // res.send({ payment_status: session.payment_status, payment_data: appointmentData });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = { createCheckout, getCheckoutSession };
