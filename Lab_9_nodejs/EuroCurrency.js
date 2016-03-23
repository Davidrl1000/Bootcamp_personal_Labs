var euroValue = 590;

module.exports.currentEuroValue = function() {
  return '€'+euroValue;
};

module.exports.colonesToEuros = function(money) {
  return '€'+parseFloat(money)/parseFloat(euroValue);
};

module.exports.eurosToColones = function(money) {
  return '₡'+parseFloat(money)*parseFloat(euroValue);
};
