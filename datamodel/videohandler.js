var videoInfo = require('./model/videoinfo');

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
}
/*	//usedSockets[data.userid].emit("ON_VIDEO_PUBLISH", data.videoPath);
});*/