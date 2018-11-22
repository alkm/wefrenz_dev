var mongoose = require('mongoose');

module.exports = mongoose.model('notificationinfo', {
	userid : String,
	fullname : String,
	profilepic : Object,
	type : String,
	text : String,
	filepath : String,
	notificationpic: String,
	conversion: String,
	isReady : Boolean,
	isShown : Boolean
});