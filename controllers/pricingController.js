const pricing = require('../config/pricing')

const getPricing = (req, res) => {
    res.send(pricing)
}

module.exports = { getPricing }