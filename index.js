const express = require('express')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY)
const bodyParser = require('body-parser')
const app = express()

const path = __dirname + '/views/'

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
            lineItems.push({
                price_data: {
                currency: 'eur',
                product_data: {
                    name: 'Skultes Gym rezervācija',
                    description: item.date_text + ' ' + item.start_time + ' - ' + item.end_time,
                },
                unit_amount: item.price * 100,
                },
                quantity: 1,
            })
        });
    } catch (error) {
        res.send({msg: error.message})
    }

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:4242/success',
        cancel_url: 'http://localhost:4242/cancel',
    });
//   console.log(req.body)
//   res.send(req.body)
  res.send(session.url)
//   res.redirect(303, session.url);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
