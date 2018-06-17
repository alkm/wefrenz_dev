var mongoose = require('mongoose');
module.exports = mongoose.model('addressinfo', {
	userid : String,
	billingInfo: Array,
	shippingInfo: Array,
	created: {type: Date, default: Date.now()}
});