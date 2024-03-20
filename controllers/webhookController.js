const stripe = require('stripe')(process.env.STRIPE_KEY);
const Appointment = require('../model/Appointment');
const eventController = require('./eventController');

const handleWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;
    const key = process.env.PAYMENT_SIGNATURE
    if(key) console.log('key exists')

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, key);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.async_payment_failed':
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        console.log('Session', checkoutSessionAsyncPaymentFailed.id, 'async payment failed')
        break;

        // CHECKOUT.SESSION.ASYNC_PAYMENT_SUCCEEDED
        case 'checkout.session.async_payment_succeeded':
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        console.log('Session', checkoutSessionAsyncPaymentSucceeded.id, 'async payment succeeded')
        try { 
            const result = await Appointment.updateMany(
                { checkout: checkoutSessionAsyncPaymentSucceeded.id },
                { $set: { status: 'paid' } }
            );

            for await (const appointment of Appointment.find({ checkout: checkoutSessionAsyncPaymentSucceeded.id })) {
                const eventDetails = {
                    summary: appointment.name,
                    colorId: '3',
                    description: appointment.phone,
                    start: {
                        dateTime: appointment.date.toISOString().slice(0,10) + 'T' + appointment.range.start.time + ':00',
                        timeZone: 'Europe/Riga'
                    },
                    end: {
                        dateTime: appointment.date.toISOString().slice(0,10) + 'T' + appointment.range.end.time + ':00',
                        timeZone: 'Europe/Riga'
                    }
                };
    
                eventController.addEventToCalendar(eventDetails, eventController.calendar);
                console.log("Event created for " + appointment.name);
            }


            
            if (result.modifiedCount === 0) {
                console.error("No appointments found for the given ID" );
            }
    
            console.log(`${result.modifiedCount} appointments updated successfully`);
        } catch (error) {
            console.error("Error updating appointments:", error);
        }
        break;

        // CHECKOUT.SESSION.COMPLETED
        case 'checkout.session.completed':
        const checkoutSessionCompleted = event.data.object;
        console.log('Session', checkoutSessionCompleted.id, 'completed')
        try {    
            const result = await Appointment.updateMany(
                { checkout: checkoutSessionCompleted.id },
                { $set: { status: 'paid' } }
            );

            for await (const appointment of Appointment.find({ checkout: checkoutSessionCompleted.id })) {
                const eventDetails = {
                    summary: appointment.name,
                    colorId: '3',
                    description: appointment.phone,
                    start: {
                        dateTime: appointment.date.toISOString().slice(0,10) + 'T' + appointment.range.start.time + ':00',
                        timeZone: 'Europe/Riga'
                    },
                    end: {
                        dateTime: appointment.date.toISOString().slice(0,10) + 'T' + appointment.range.end.time + ':00',
                        timeZone: 'Europe/Riga'
                    }
                };
    
                eventController.addEventToCalendar(eventDetails, eventController.calendar);
                console.log("Event created for " + appointment.name);
            }
    
            if (result.modifiedCount === 0) {
                console.error("No appointments found for the given ID" );
            }
    
            console.log(`${result.modifiedCount} appointments updated successfully`);
        } catch (error) {
            console.error("Error updating appointments:", error);
        }
        
        break;
        case 'checkout.session.expired':
        const checkoutSessionExpired = event.data.object;
        console.log('Session', checkoutSessionExpired.id, 'expired')
        // Then define and call a function to handle the event checkout.session.expired
        break;
        // ... handle other event types
        default:
        console.log(`Unhandled event type ${event.type}`);
    }


  res.send();
};

module.exports = { handleWebhook }
