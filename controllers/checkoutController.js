require('dotenv').config()
const moment = require('moment')
const stripe = require('stripe')(process.env.STRIPE_KEY)
const Appointment = require('../model/Appointment')

const createCheckout = async (req, res) => {
    try {
        const lineItems = [];
        req.body.forEach(appointment => {
            lineItems.push({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Skultes Gym rezervācija',
                        description: appointment.date + ' ' + appointment.range.start.time + ' - ' + appointment.range.end.time,
                    },
                    unit_amount: appointment.price,
                },
                quantity: 1,
            });
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "https://skultes.cyclic.app/#/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "https://skultes.cyclic.app",
        });

        const appointments = req.body.map( appointment => {
            return {
                ...appointment,
                checkout: session.id
            }
        })

        console.log(appointments)

        // data insert ar session id
        const createdAppointments = await Appointment.insertMany(appointments)
        res.send({created: createdAppointments})

        // res.send({ id: session.id, url: session.url });
        
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
};

const getCheckoutSession = async (req, res) => {
    try{
        console.log('Getting session', req.body.session_id)
        const session = await stripe.checkout.sessions.retrieve(req.body.session_id)
        res.send({payment_status: session.payment_status})
    }catch(error){
        res.status(400).send({msg:  error.message})
    }
}

module.exports = { createCheckout, getCheckoutSession }