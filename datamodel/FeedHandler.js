var feedInfo = require('./model/feedInfo');
module.exports = function(app) {
	// api ---------------------------------------------------------------------
	app.post('/api/savePost/', function(req, res) {
		// Getting all the online friends
		feedInfo.create({
			userid : req.body.username,
			fullname : req.body.fullname,
			profilepic : req.body.profilepic,
			post : req.body.post,
			type : req.body.type,
			isReady : req.body.isReady,
			isNotified : req.body.isNotified,
			coolArr : [],
			commentArr : [],
			filePath : req.body.filePath,
			poster : req.body.poster,
			colorInfo : req.body.colorInfo,
			fontFamily : req.body.fontFamily,
			fontSize : req.body.fontSize,
			fontStyle : req.body.fontStyle,
			textDecoration : req.body.fontDecoration,
			fontWeight : req.body.fontWeight,
			addWatcherArr : req.body.addWatcherArr,
			done: false
		}, function(err, info) {
			if (err){
				res.json({"status": "failure", "message": "This post could not be saved.", "err": err});
			}else{
				res.json({"status": "success", "message": "This post saved.", "info": info});
			}
		});
	});
	
	app.post('/api/getAllFriendsFeedDetails/', function(req, res) {	
		// Getting all the confirmed friends feed details
		//req.body.reqidarr = req.body.reqidarr.push(req.mySession.userid);
		feedInfo.find({ $and: [{userid: {$in : req.body.reqidarr}}, {isReady : true  } ] }, function(error, infos){
		//feedInfo.find({userid : {$in : req.body.reqidarr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("feed Infos"+infos);
				res.send(infos);
			}
		});
	});

	app.post('/api/refreshFeed/', function(req, res) {	
		// Getting all the confirmed friends feed details
		//req.body.reqidarr = req.body.reqidarr.push(req.mySession.userid);
		feedInfo.find({ $and: [{userid: {$in : req.body.reqidarr}}, {isReady : true  } ] }, function(error, infos){
		//feedInfo.find({userid : {$in : req.body.reqidarr}}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("feed Infos"+infos);
				res.send(infos);
			}
		});
	});
	
	app.post('/api/pullFeedChannel/', function(req, res) {	
		// Getting all the confirmed friends 
		feedInfo.find({_id : req.body.feedid}, function(error, infos){
			if(error){
				console.log("Error"+error);
			}else{
				console.log("These are my feeds"+infos);
				res.send(infos);
			}
		});
	});
	
	app.post('/api/updateCoolFeedChannel/', function(req, res) {	
		feedInfo.update({_id: req.body.feedid}, {$set: {coolArr: req.body.coolarr}}, function(error, infos){
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
				console.log("These are my feeds"+infos);
				res.send(infos);
			}
		});
	});
}

global.nodeEventer.subscribe('ON_VIDEO_PUBLISH', function(data){
	console.log("info.videoPath"+data.info.videoPath);
	feedInfo.update({path: data.info.videoPath}, {$set: {isReady: true}}, function(error, infos){
		if(error){
			console.log("Error"+error);
		}else{
			console.log("video feed updated");
		}
	});
});