const express = require('express');

const router = express.Router();
const checkoutController = require('../../controllers/checkoutController');
const appointmentHandler = require('../../middleware/appointmentHandler');

router.route('/')
  .post(appointmentHandler.createAppointmentMiddleware, checkoutController.createCheckout);

router.route('/:id')
  .get(checkoutController.getCheckoutSession);

module.exports = router;
