var commentInfo = require('./model/commentinfo');
module.exports = function(app) {
	// api ---------------------------------------------------------------------
	app.post('/api/saveComment/', function(req, res) {
		var dateNow = new Date();
		if(req.body.id === undefined){
			commentInfo.create({
				commentid : req.body.feeditemid,
				commenttext : req.body.commenttext,
				commentfrom : req.body.commentfrom,
				commentto : req.body.commentto,
				fullname : req.body.fullname,
				profilepic : req.body.profilepic,
				commenttype : req.body.commenttype,
				filePath : req.body.filePath,
				isReady : req.body.isReady,
				isNotified : req.body.isNotified,
				likeArr : [],
				loveArr : [],
				poster : req.body.poster,
				colorInfo : req.body.colorInfo,
				fontFamily : req.body.fontFamily,
				fontSize : req.body.fontSize,
				fontStyle : req.body.fontStyle,
				textDecoration : req.body.textDecoration,
				fontWeight : req.body.fontWeight,
				addWatcherArr : req.body.addWatcherArr,
				created: dateNow
			}, function(err, info) {
				if (err){
					res.json({"status": "failure", "message": "This comment could not be saved.", "err": err});
				}else{
					res.json({"status": "success", "message": "This comment has been saved.", "info": info});
				}
			});
		}else{
			commentInfo.update({_id: req.body.id}, {$set: {
				commentid : req.body.feeditemid,
				commenttext : req.body.commenttext,
				commentfrom : req.body.commentfrom,
				commentto : req.body.commentto,
				fullname : req.body.fullname,
				profilepic : req.body.profilepic,
				commenttype : req.body.commenttype,
				filePath : req.body.filePath,
				isReady : req.body.isReady,
				isNotified : req.body.isNotified,
				likeArr : [],
				loveArr : [],
				poster : req.body.poster,
				colorInfo : req.body.colorInfo,
				fontFamily : req.body.fontFamily,
				fontSize : req.body.fontSize,
				fontStyle : req.body.fontStyle,
				textDecoration : req.body.textDecoration,
				fontWeight : req.body.fontWeight,
				addWatcherArr : req.body.addWatcherArr,
				created: dateNow}
			}, function(err, info){
				if (err){
					res.json({"status": "failure", "message": "This post could not be saved.", "err": err});
				}else{
					res.json({"status": "success", "message": "This post saved.", "info": info});
				}
			});

		}

	});

	
	app.post('/api/fetchCommentsForCurrentFeedItem/', function(req, res) {	
		// Getting all the confirmed friends 
		console.log('req.body.feeditemid>>>>'+req.body.feeditemid);
		commentInfo.find({commentid : req.body.feeditemid}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send(infos);
			}
		});
	});
}
	