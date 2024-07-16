const pricing = require('../config/pricing');

const calculatePricing = (start, end, date) => {
  const day = new Date(date).getDay();
  const isWeekend = day === 0 || day === 6;

  if (isWeekend) {
    if (pricing.morning[end - start]) {
      return pricing.morning[end - start];
    }
    return null;
  }

  if (start > 30 && start < 58) {
    if (pricing.standard[end - start]) {
      return pricing.standard[end - start];
    }
    return null;
  }

  if (pricing.morning[end - start]) {
    return pricing.morning[end - start];
  }
  return null;
};

module.exports = calculatePricing;
