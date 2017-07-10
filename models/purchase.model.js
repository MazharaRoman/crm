var mongoose = require('mongoose');

var PurchaseSchema = new mongoose.Schema({
  _product: {
      _id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product'
    },
    name: String,
    description: String,
    scale: String,
    code: String,
    certificate: String,
    amount: Number
  },
  amount: Number
});

module.exports = mongoose.model('Purchase', PurchaseSchema);