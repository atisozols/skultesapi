const pricing = require('../config/pricing');

const calculatePricing = (start, end) => {
  if (start > 30) {
    if (pricing.standard[end - start]) {
      return pricing.standard[end - start];
    }
    return 0;
  }

  if (pricing.morning[end - start]) {
    return pricing.morning[end - start];
  }
  return 0;
};

module.exports = calculatePricing;
