const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
	plates: String,
	car: String,
	driver: String
});

module.exports = mongoose.model('Driver', DriverSchema);