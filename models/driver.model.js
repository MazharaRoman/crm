
var mongoose = require('mongoose');

var DriverSchema = new mongoose.Schema({
	plates: String,
	car: String,
	driver: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Driver', DriverSchema);