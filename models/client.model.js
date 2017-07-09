
var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
    m: string,
    p: string,
    name: string,
    comercialName: string,
    phone: string,
    city: string,
    postCode: number,
    region: string,
    address: string,
    taxNumber: number,
    vatNumber: number,
    contacts: string,
    contact: {
        number: string,
        date: Date
    },
    prices: any[],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);