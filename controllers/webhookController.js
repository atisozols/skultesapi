const stripe = require('stripe')(process.env.STRIPE_KEY);
const knexInstance = require('../config/knex');

const handlePaymentSuccessEvent = async (event) => {
  try {
    const checkoutSession = event.data.object;
    const { metadata } = checkoutSession;
    const { user, count } = metadata;

    // Update the balance in the subscriptions table
    await knexInstance('subscriptions')
      .where('user_id', user)
      .increment('balance', count);
  } catch (error) {
    console.error('Error updating subscription:', error);
  }
};

const handlePaymentFailureEvent = (event) => {
  const checkoutSession = event.data.object;
  console.log('Payment failed for session', checkoutSession.id);
};

const handleSessionExpiredEvent = (event) => {
  const checkoutSession = event.data.object;
  console.log('Session expired:', checkoutSession.id);
};

const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const key = process.env.PAYMENT_SIGNATURE;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, key);

    switch (event.type) {
      case 'checkout.session.async_payment_succeeded':
      case 'checkout.session.completed':
        await handlePaymentSuccessEvent(event);
        break;

      case 'checkout.session.async_payment_failed':
        handlePaymentFailureEvent(event);
        break;

      case 'checkout.session.expired':
        handleSessionExpiredEvent(event);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.send();
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { handleWebhook };
