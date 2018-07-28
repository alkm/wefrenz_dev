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
		addressInfo.findOne({userid: req.body.username}, function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item === null){
					res.json({"status": "failure", "message": "The address is not added."});
				}else{
					res.json({"status": "success", "message": "Address is aleady exist", "info": item});
				}
			}
		});
	});
}