require('dotenv').config()
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

        const currentTime = new Date().getTime();
        const thirtyMinutesFromNow = currentTime + (30 * 60 * 1000);

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: process.env.HOST_URL + "/#/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: process.env.HOST_URL,
            expires_at: Math.floor(thirtyMinutesFromNow / 1000),
            allow_promotion_codes: true
        });

        const appointments = req.body.map( appointment => {
            return {
                ...appointment,
                checkout: session.id
            }
        })

        const createdAppointments = await Appointment.insertMany(appointments)
        console.log(createdAppointments)

        res.send({ id: session.id, url: session.url });
        
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
};

const getCheckoutSession = async (req, res) => {
    try{
        console.log('Getting session', req.params.id)
        const session = await stripe.checkout.sessions.retrieve(req.params.id)
        res.send({payment_status: session.payment_status})
    }catch(error){
        res.status(400).send({msg:  error.message})
    }
}

module.exports = { createCheckout, getCheckoutSession }