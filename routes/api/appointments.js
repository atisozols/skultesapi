const express = require('express');
const router = express.Router();
const appointmentController = require('../../controllers/appointmentController');

router.route('/')
    .post(appointmentController.handleNewAppointments)
    // .get(appointmentController.getAvailability)
    // .put(appointmentController.updateAppointments)

module.exports = router;