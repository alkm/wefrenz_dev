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
				commenttext : req.body.commenttext,
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
		var feedItemId = req.body.feeditemid;
		var skip = req.body.skip;
		var limit = req.body.limit;
        commentInfo.find({commentid : feedItemId})
        .skip(skip)
        .limit(limit)
        .sort('-created')
        .exec(function(err, infos) {
            commentInfo.count({commentid : feedItemId}).exec(function(err, count) {
                if (err) return next(err)
                res.send({
                    "infos": infos,
                    "total": count
                })
            })
        })
	});

	app.post('/api/updateLikeCommentChannel/', function(req, res) {	
		commentInfo.update({_id: req.body.id}, {$set: {likeArr: req.body.likearr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send("updated");
			}
		});
	});

	app.post('/api/updateLoveCommentChannel/', function(req, res) {	
		commentInfo.update({_id: req.body.id}, {$set: {loveArr: req.body.lovearr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send("updated");
			}
		});
	});

	app.post('/api/deleteCommentItem/', function(req, res) {	
		//Delete the feed item
		commentInfo.remove({ _id: req.body.id }, function(err) {
			if(err){
				console.log("Error"+err);
				res.json({"status": "failure", "message": "Comment item can't be deleted now, please try again later."});
			}else{
				res.json({"status": "success", "message": "Comment item deleted successfully"});
			}
		});
	});
}
	