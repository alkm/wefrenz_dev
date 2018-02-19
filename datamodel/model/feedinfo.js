var mongoose = require('mongoose');
module.exports = mongoose.model('feedinfo', {
	userid : String,
	fullname : String,
	profilepic : String,
	post : String,
	type : String,
	filePath : String,
	isReady : Boolean,
	isNotified : Boolean,
	coolArr : Array,
	commentArr : Array,
	colorInfo : String,
	fontFamily : String,
	fontSize : String,
	fontStyle : String,
	txtDecoration : String,
	fontWeight : String,
	addWatcherArr : Array,
	done : Boolean
});