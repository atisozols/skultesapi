const express = require('express');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const router = express.Router();
const checkoutController = require('../../controllers/checkoutController');

router.route('/')
  .post(ClerkExpressWithAuth({
    authorizedParties: process.env.ALLOWED_ORIGINS.split(','),
  }), checkoutController.createCheckout);

router.route('/:id')
  .get(checkoutController.getCheckoutSession);

module.exports = router;
