
var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
    m: String,
    p: String,
    name: String,
    commercialName: String,
    phone: String,
    city: String,
    postCode: Number,
    region: String,
    address: String,
    taxNumber: Number,
    vatNumber: Number,
    contacts: String,
    contract: {
        number: String,
        date: Date
    },
    prices: Array
});

module.exports = mongoose.model('Client', ClientSchema);