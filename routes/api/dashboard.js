const express = require('express');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const router = express.Router();
const dashboardController = require('../../controllers/dashboardController');

router.route('/')
  .get(
    ClerkExpressWithAuth({
      authorizedParties: process.env.ALLOWED_ORIGINS.split(','),
    }),
    dashboardController.getData,
  );

router.route('/')
  .post(
    ClerkExpressWithAuth({
      authorizedParties: process.env.ALLOWED_ORIGINS.split(','),
    }),
    dashboardController.addAppointments,
  );

router.route('/')
  .delete(
    ClerkExpressWithAuth({
      authorizedParties: process.env.ALLOWED_ORIGINS.split(','),
    }),
    dashboardController.deleteAppointemnt,
  );

module.exports = router;
