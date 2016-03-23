var dollarValue = 532;

module.exports.currentDollarValue = function() {
  return '$'+dollarValue;
};

module.exports.colonesToDollars = function(money) {
  return '$'+parseFloat(money)/parseFloat(dollarValue);
};

module.exports.dollarsToColones = function(money) {
  return '₡'+parseFloat(money)*parseFloat(dollarValue);
};
