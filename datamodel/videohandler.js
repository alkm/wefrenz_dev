var fs = require('fs');
var videoInfo = require('./model/videoinfo');
var notificationInfo = require('./model/notificationinfo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.post('/api/createVideoAlbum/', function(req, res) {	
		videoInfo.findOne({userid: req.body.username, title: req.body.title}, function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item == null){
					videoInfo.create({
						userid : req.body.username,
						title: req.body.title,
						description: req.body.desc,
						videosList : [],
						albumCover : '',
						sharedWith: []
					}, function(err, info) {
						if (err){
							res.send(err);
						}else{
							res.json({"status": "success", "message": "Album created successfully", "info": info});
						}
					});	
				}else{
					res.json({"status": "failure", "message": "This album title already exist, add a different title ", "info": item});
				}
			}
		});
	});

	app.post('/api/fetchVideoAlbumInfo/', function(req, res) {	
		videoInfo.find({userid: req.body.username}, function(error, docs){
			if(error){
				console.log("Error"+error);
			}else{
				res.send(docs);
			}
		});
	});
	app.post('/api/fetchAlbumVideoInfo/', function(req, res) {	
		videoInfo.find({userid: req.body.username, title: req.body.album}, function(error, docs){
			if(error){
				console.log("Error"+error);
			}else{
				res.send(docs);
			}
		});
	});

	app.post('/api/updateVideoAlbum/', function(req, res) {	

		videoInfo.findOne({userid: req.body.username, title: req.body.title}, function(err, item){
			if(err){
				res.send(err);
			}else{
				if(item == null){
					videoInfo.update({_id: req.body.id}, {$set: {title: req.body.title, description: req.body.desc}}, function(error, info){
						if(error){
							console.log("Error"+error);
						}else{
							res.json({"status": "success", "message": "Album updated successfully", "info": info});
						}
					});	
				}else{
					res.json({"status": "failure", "message": "This album title already exist, add a different title ", "info": item});
				}
			}
		});
	});

	app.post('/api/deletePreviewVideo/', function(req, res) {	
		var videoPath = req.body.filapath;
		console.log('>>><<<'+videoPath);
		notificationInfo.remove({filepath: videoPath}, function(err, item){
			if(err){
				res.send(err);
			}else{
				fs.unlink('media/videos/myvideos/original/'+videoPath.split('/')[2], (err) => {
			        if (err) {
			            console.log("failed to delete local image:"+err);
			        } else {
			            console.log('successfully deleted local image');
			            res.send ({
				        	status: "200",
				        	responseType: "string",
				        	response: "success"
				      	});                                 
			        }
				});
			}
		});
	});
}
/*	//usedSockets[data.userid].emit("ON_VIDEO_PUBLISH", data.videoPath);
});*/