const stripe = require('stripe')(process.env.STRIPE_KEY);
const Appointment = require('../model/Appointment');
const eventController = require('./eventController');

const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  const key = process.env.PAYMENT_SIGNATURE;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, key);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    // CHECKOUT.SESSION.ASYNC_PAYMENT_FAILED
    case 'checkout.session.async_payment_failed': {
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      console.log(
        'Session',
        checkoutSessionAsyncPaymentFailed.id,
        'async payment failed',
      );

      try {
        const result = await Appointment.deleteMany({
          checkout: checkoutSessionAsyncPaymentFailed.id,
          status: 'cart',
        });

        console.log(`${result.deletedCount} deleted`);
      } catch (error) {
        console.error('Error deleting appointments:', error);
      }

      break;
    }

    // CHECKOUT.SESSION.ASYNC_PAYMENT_SUCCEEDED
    case 'checkout.session.async_payment_succeeded': {
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      console.log(
        'Session',
        checkoutSessionAsyncPaymentSucceeded.id,
        'async payment succeeded',
      );
      try {
        const result = await Appointment.updateMany(
          { checkout: checkoutSessionAsyncPaymentSucceeded.id },
          { $set: { status: 'paid' } },
        );

        const appointments = await Appointment.find({
          checkout: checkoutSessionAsyncPaymentSucceeded.id,
        });

        // const attendeeEmail = checkoutSessionAsyncPaymentSucceeded.customer_email
        // || checkoutSessionAsyncPaymentSucceeded.customer_details.email;

        appointments.forEach(async (appointment) => {
          await eventController.addEventToCalendar(
            appointment,
            eventController.calendarInstance,
          );
          console.log(`Event created for ${appointment.name}`);
        });

        if (result.modifiedCount === 0) {
          console.error('No appointments found for the given ID');
        }

        console.log(`${result.modifiedCount} updated to status: paid`);
      } catch (error) {
        console.error('Error updating appointments:', error);
      }
      break;
    }

    // CHECKOUT.SESSION.COMPLETED
    case 'checkout.session.completed': {
      const checkoutSessionCompleted = event.data.object;
      console.log('Session', checkoutSessionCompleted.id, 'completed');
      try {
        const result = await Appointment.updateMany(
          { checkout: checkoutSessionCompleted.id },
          { $set: { status: 'paid' } },
        );

        const appointments = await Appointment.find({
          checkout: checkoutSessionCompleted.id,
        });

        // const attendeeEmail = checkoutSessionCompleted.customer_email
        // || checkoutSessionCompleted.customer_details.email;

        appointments.forEach(async (appointment) => {
          const calEvent = await eventController.addEventToCalendar(
            appointment,
            eventController.calendarInstance,
          );
          console.log(`Event created for ${appointment.name}`);
          console.log(calEvent);
        });

        if (result.modifiedCount === 0) {
          console.error('No appointments found for the given ID');
        }

        console.log(`${result.modifiedCount} updated to status: paid`);
      } catch (error) {
        console.error('Error updating appointments:', error);
      }

      break;
    }

    // CHECKOUT.SESSION.EXPIRED
    case 'checkout.session.expired': {
      const checkoutSessionExpired = event.data.object;
      console.log('Session', checkoutSessionExpired.id, 'expired');
      try {
        const result = await Appointment.deleteMany({
          checkout: checkoutSessionExpired.id,
          status: 'cart',
        });

        console.log(`${result.deletedCount} deleted`);
      } catch (error) {
        console.error('Error deleting appointments:', error);
      }

      break;
    }

    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.send();
};

module.exports = { handleWebhook };
