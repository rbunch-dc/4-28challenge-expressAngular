var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = new Schema({
	name: String,
	address: String,
	city: String,
	zip: Number
});

module.exports = mongoose.model('Student', Student);