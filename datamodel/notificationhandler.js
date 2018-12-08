var notificationInfo = require('./model/notificationinfo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.post('/api/configureNotification/', function(req, res) {	
		var dateNow = new Date();
		notificationInfo.create({
			userid : req.body.username,
			fullname : req.body.fullname,
			profilepic : req.body.profilePicObj,
			type : req.body.notificationType,
			text : req.body.notificationText,
			filePath : req.body.filePath,
			isReady : req.body.isReady,
			isShown : req.body.isShown
		}, function(err, info) {
			if (err){
				res.send(err);
			}else{
				res.json({"status": "success", "message": "Notification Configured", "info": info});
			}
		});	
	});

	app.post('/api/checkNotification/', function(req, res) {	
		notificationInfo.find({userid: req.body.userid, isReady: true, isShown: false}).sort('-created').exec(function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item === null){
					res.json({"status": "failure", "message": "There is no new notification."});
				}else{
					res.json({"status": "success", "message": "Fetching new notification.", "info": item});
				}
			}
		});
	});

	
	app.post('/api/fetchAllNotifications/', function(req, res) {	
		notificationInfo.find({userid: req.body.userid, state: 'shown'}).sort('-created').exec(function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item === null){
					res.json({"status": "failure", "message": "There is no new notification."});
				}else{
					res.json({"status": "success", "message": "Fetching new notification.", "info": item});
				}
			}
		});
	});
	
	app.post('/api/updateNotificationDisplay/', function(req, res) {	
		//This is happenoing in home page
		// check a friend info, information comes from AJAX request from Angular
		var notArr = req.body.notarr;

		notificationInfo.update({userid : {$in : notArr}, isShown: false }, { $set: {isShown: true}}, { multi: true }, function(error, infos){
			if(error){
				console.log("Error"+err);
			}else{
				res.json({"status": "success", "message": "Notification updated."});
			}
		});
	});

}