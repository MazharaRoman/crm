const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    scale: String,
    code: String,
    certificate: String,
    amount: Number
});

module.exports = mongoose.model('Product', ProductSchema);
