var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  scale: String,
  code: String,
  certificate: String,
  amount: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);