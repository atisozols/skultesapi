const express = require('express');
const router = express.Router();
const appointmentController = require('../../controllers/appointmentController');

router.route('/')
    .get(appointmentController.getAvailability)

module.exports = router;