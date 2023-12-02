const express = require('express')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY)
const bodyParser = require('body-parser')
const app = express()
const path = __dirname + '/views/'

const os = require('os');

const interfaces = os.networkInterfaces();
for (const key in interfaces) {
    for (const iface of interfaces[key]) {
        if (!iface.internal && iface.family === 'IPv4') {
            console.log(`Found IPv4 address: ${iface.address}`);
        }
    }
}


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
    } catch (error) {
        res.status(400).send({msg:  error.message})
    }

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:4242/success',
        cancel_url: 'http://localhost:4242/cancel',
    });
  res.send(session.url)
//   res.redirect(303, session.url);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
