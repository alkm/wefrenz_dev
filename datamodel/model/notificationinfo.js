var mongoose = require('mongoose');

module.exports = mongoose.model('notificationinfo', {
	userid : String,
	fullname : String,
	profilepic : Object,
	type : String,
	text : String,
	filePath : String,
	isReady : boolean,
	done : Boolean
});