var mongoose = require('mongoose');
module.exports = mongoose.model('marketinfo', {
	userid : String,
	itemName : String,
	category : String,
	location : String,
	contactNo : Number,
	productImage : String,
	productDesc : String,
	created: {type: Date, default: Date.now()}
});