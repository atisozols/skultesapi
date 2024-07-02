const express = require('express');

const router = express.Router();
const appointmentController = require('../../controllers/appointmentController');

router.route('/').get(appointmentController.getAvailability);

router.route('/delete').post(appointmentController.cancelAppointment);

module.exports = router;
