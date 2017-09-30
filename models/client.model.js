const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const ClientSchema = new mongoose.Schema({
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
    prices: [{
        _product: {
            type: ObjectId,
            ref: "product"
        },
        value: Number
    }]
});

module.exports = mongoose.model('Client', ClientSchema);