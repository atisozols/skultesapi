const isCancelledString = (str) => {
  const regex = /^cancelled-[a-zA-Z0-9]+$/;
  return regex.test(str);
};

module.exports = isCancelledString;
