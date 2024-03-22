const express = require('express');

const router = express.Router();
const webhookController = require('../../controllers/webhookController');

router.route('/')
  .post(express.raw({ type: 'application/json' }), webhookController.handleWebhook);

module.exports = router;
