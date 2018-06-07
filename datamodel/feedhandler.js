var feedInfo = require('./model/feedinfo');
var commentInfo = require('./model/commentinfo');
module.exports = function(app) {
	// api ---------------------------------------------------------------------
	app.post('/api/savePost/', function(req, res) {
		var dateNow = new Date();
		if(req.body.id === undefined){
			feedInfo.create({
				userid : req.body.username,
				fullname : req.body.fullname,
				profilepic : req.body.profilepic,
				post : req.body.post,
				type : req.body.type,
				title : req.body.title,
				description : req.body.description,
				isReady : req.body.isReady,
				isNotified : req.body.isNotified,
				likeArr : [],
				loveArr : [],
				commentArr : [],
				filePath : req.body.filePath,
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
					res.json({"status": "failure", "message": "This post could not be saved.", "err": err});
				}else{
					res.json({"status": "success", "message": "This post saved.", "info": info});
				}
			});
		}else{
			feedInfo.update({_id: req.body.id}, {$set: {
				userid : req.body.username,
				fullname : req.body.fullname,
				profilepic : req.body.profilepic,
				post : req.body.post,
				type : req.body.type,
				title : req.body.title,
				description : req.body.description,
				isReady : req.body.isReady,
				isNotified : req.body.isNotified,
				filePath : req.body.filePath,
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
	
	app.post('/api/getAllFriendsFeedDetails/', function(req, res) {	
		// Getting all the confirmed friends feed details
		//req.body.reqidarr = req.body.reqidarr.push(req.mySession.userid);
		feedInfo.find({ $and: [{userid: {$in : req.body.reqidarr}}, {isReady : true  } ] }, function(error, infos){
		//feedInfo.find({userid : {$in : req.body.reqidarr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send(infos);
			}
		});
	});

	app.post('/api/refreshFeed/', function(req, res) {	
		// Getting all the confirmed friends feed details
		//req.body.reqidarr = req.body.reqidarr.push(req.mySession.userid);

		
		/*feedInfo.find({ $and: [{userid: {$in : req.body.reqidarr}}, {isReady : true  } ] }).skip(0).limit(1).sort('-created').exec(function(err, infos) {
			if(err){
				console.log("Error"+infos);
			}else{
				res.send({"infos": infos, "total": infos.count()});
			} 
		});*/

		var reqidarr = req.body.reqidarr;
		var skip = req.body.skip;
		var limit = req.body.limit;
        feedInfo.find({$and: [{userid: {$in : reqidarr}}, {isReady : true  } ] })
        .skip(skip)
        .limit(limit)
        .sort('-created')
        .exec(function(err, infos) {
            feedInfo.count({$and: [{userid: {$in : reqidarr}}, {isReady : true  } ] }).exec(function(err, count) {
                if (err) return next(err)
                res.send({
                    "infos": infos,
                    "total": count
                })
            })
        })
	});
	app.post('/api/deleteFeedItem/', function(req, res) {	
		var itemId = req.body.id;
		//Delete the feed item
		feedInfo.remove({ _id: itemId }, function(err) {
			if(err){
				console.log("Error"+err);
				res.json({"status": "failure", "message": "Feed item can't be deleted now, please try again later."});
			}else{
				//res.json({"status": "success", "message": "Feed item deleted successfully"});
				//Delete respective comments from other collection
				commentInfo.remove({ commentid: itemId }, function(err) {
					if(err){
						res.json({"status": "failure", "message": "Respective comment item can't be deleted now, please try again later."});
					}else{
						res.json({"status": "success", "message": "Feed item & respective coomments deleted successfully"});
					}
				});
			}
		});
	});
	
	app.post('/api/pullFeedChannel/', function(req, res) {	
		// Getting all the confirmed friends 
		feedInfo.find({_id : req.body.id}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send(infos);
			}
		});
	});
	
	app.post('/api/updateLikeFeedChannel/', function(req, res) {	
		console.log(req.body.id, req.body.likearr);
		feedInfo.update({_id: req.body.id}, {$set: {likeArr: req.body.likearr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send("updated");
			}
		});
	});
	app.post('/api/updateLoveFeedChannel/', function(req, res) {	
		console.log(req.body.id, req.body.lovearr);
		feedInfo.update({_id: req.body.id}, {$set: {loveArr: req.body.lovearr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send("updated");
			}
		});
	});
	
	app.post('/api/updateCommentFeedChannel/', function(req, res) {	
		feedInfo.update({_id: req.body.feedid}, {$set: {commentArr: req.body.commentarr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send("updated");
			}
		});
	});
	
	app.post('/api/updateCommentItemFeedChannel/', function(req, res) {	
		feedInfo.update({_id: req.body.feedid}, {$set: {commentArr: req.body.existingcommentbundles}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send("updated");
			}
		});
	});
	
	app.post('/api/checkVideoReady/', function(req, res) {
		feedInfo.find({path: req.body.videokey}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				res.send(infos);
			}
		});
	});
}

global.nodeEventer.subscribe('ON_VIDEO_PUBLISH', function(data){
	feedInfo.update({path: data.info.videoPath}, {$set: {isReady: true}}, function(error, infos){
		if(error){
			console.log("Error"+error);
		}else{
			console.log("video feed updated");
		}
	});
});