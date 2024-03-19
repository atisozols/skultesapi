// .env
require('dotenv').config()

// express
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = __dirname + '/views/'
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 5000;
const eventController = require('./controllers/eventController');

// stripe
// const stripe = require('stripe')(process.env.STRIPE_KEY)

// MongoDB/mongoose
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection')
connectDB()

app.use('/webhook', require('./routes/api/webhook'))
// app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
//     const sig = req.headers['stripe-signature'];

//     let event;
//     const key = process.env.PAYMENT_SIGNATURE
//     if(key) console.log('key exists')

//     try {
//         event = stripe.webhooks.constructEvent(req.body, sig, key);
//     } catch (err) {
//         res.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//     }

//     // Handle the event
//     switch (event.type) {
//         case 'checkout.session.async_payment_failed':
//         const checkoutSessionAsyncPaymentFailed = event.data.object;
//         console.log('testing123')
//         break;
//         case 'checkout.session.async_payment_succeeded':
//         const checkoutSessionAsyncPaymentSucceeded = event.data.object;
//         console.log('testing123')
//         // Then define and call a function to handle the event checkout.session.async_payment_succeeded
//         break;
//         case 'checkout.session.completed':
//         const checkoutSessionCompleted = event.data.object;
//         console.log('testing123')
//         // Then define and call a function to handle the event checkout.session.completed
//         break;
//         case 'checkout.session.expired':
//         const checkoutSessionExpired = event.data.object;
//         console.log('testing123')
//         // Then define and call a function to handle the event checkout.session.expired
//         break;
//         // ... handle other event types
//         default:
//         console.log(`Unhandled event type ${event.type}`);
//     }

//     // Return a 200 response to acknowledge receipt of the event
//     res.send();
// });

app.use(cors(corsOptions))
app.use(express.static(path))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/checkout/', require('./routes/api/checkout'))

app.use('/api/pricing/', require('./routes/api/pricing'))

app.use('/api/availability/', require('./routes/api/appointments'))

app.get('/', (req, res) => {
    res.sendFile(path + 'index.html')
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    eventController.addEventToCalendar().then(res => {
        console.log(res)
    })
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
})

