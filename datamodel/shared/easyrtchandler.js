var userInfo = require('../model/userinfo');
var chatInfo = require('../model/chatinfo');

module.exports ={
	updateEasyRTCIdToDB: function(data) {
		userInfo.update({username: data.email}, {$set: {easyrtcid: data.easyrtcid}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("video feed updated");
			}
		});
	},
	updateSocketStatusToDB: function(data) {
		userInfo.update({username: data.email}, {$set: {appearance: data.appearance}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("video feed updated");
			}
		});
	},
};



/*	//usedSockets[data.userid].emit("ON_VIDEO_PUBLISH", data.videoPath);
});*/