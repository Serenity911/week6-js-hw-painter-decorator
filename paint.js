const Paint = function(quantity) {
  this.quantityOfLitres = quantity;
};

Paint.prototype.isEmpty = function() {
  return this.quantityOfLitres === 0;
};

Paint.prototype.reduceQuantity = function() {
  this.quantityOfLitres--
};

module.exports = Paint;
