const express = require('express');

const router = express.Router();
const availabilityController = require('../../controllers/availabilityController');

router.route('/')
  .get(availabilityController.getAvailability);

module.exports = router;
