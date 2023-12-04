const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = __dirname + '/views/'

require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_KEY)

const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection')
connectDB()

function calculatePricing(start, end){
    const pricing = {
        3: 7.50,
        4: 10.00,
        5: 12.50,
        6: 15.00
    }
    const pricingCheap = {
        3: 5.00,
        4: 6.50,
        5: 8.50,
        6: 10.00 
    }

    if(start > 30){
        if(pricing[end - start]){
            return pricing[end - start]
        } else{
            return 0
        } 
    }
    else{
        if(pricingCheap[end - start]){
            return pricingCheap[end - start]
        } else{
            return 0
        }
    }
}

app.use(express.static(path))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path + 'index.html')
})

app.post('/checkout', async (req, res) => {
    const lineItems = []

    try {
        req.body.forEach(item => {
            if(!calculatePricing(parseInt(item.start_index), parseInt(item.end_index))){
                res.status(400).send({msg: "Bad request!"})
            }
            lineItems.push({
                price_data: {
                currency: 'eur',
                product_data: {
                    name: 'Skultes Gym rezervācija',
                    description: item.date_text + ' ' + item.start_time + ' - ' + item.end_time,
                },
                unit_amount: calculatePricing(parseInt(item.start_index), parseInt(item.end_index)) * 100,
                },
                quantity: 1,
            })
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "https://skultes.cyclic.app/order/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "https://skultes.cyclic.app",
        });
    
        // šajā momentā būtu jāizveido ieraksts datubaze ar status: cart un session: session.id

        res.send({id: session.id, url: session.url})
        //   res.redirect(303, session.url);
        
    } catch (error) {
        res.status(400).send({msg:  error.message})
    }
})

app.get('/order/success', async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id)
        const customer = await stripe.customers.retrieve(session.customer)
    
        res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`)
    }catch{
        res.status(400).send({msg: "Bad request!"})
    }
  });

const PORT = process.env.PORT || 5000

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
})

