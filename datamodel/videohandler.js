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
		var filePath = req.body.filepath;
		var videoList = [];
		var actualVideoPath = '';
		var mp4VideoPath = '';
		var posterPath = '';
		var itemId = req.body.itemid;
		console.log('itemId----'+ itemId);
		notificationInfo.remove({filepath: filePath}, function(err, item){
			if(err){
				res.send(err);
			}else{
				videoInfo.findOne({_id: itemId}, function(err, docs){
					if(err){
						res.send(err);
					}else{
		            	videoList = docs.videosList;
		            	for(var o in videoList){
		            		if(videoPath === videoList[o].mp4Video){
		            			console.log('$ Match Found');
		            			mp4VideoPath = videoList[o].mp4Video;
		            			actualVideoPath = videoList[o].actualVideo;
		            			posterPath = videoList[o].poster;
		            			console.log('&'+mp4VideoPath+'$'+actualVideoPath);
		            			videoList.splice(o, 1);
		            		}
		            	}
            			videoInfo.update({_id: itemId}, {$set: {videosList: videoList}}, function(err, info){
            				if(err){
            					cosole.log('Error Deleting video collection');
            				}else{
            					if(actualVideoPath === mp4VideoPath){
            						deleteVideo('original');
            					}else{
            						deleteVideo('mp4');
            					}
            				}
            			})
					}
	            }); 
			}
		});

	    function deleteVideo(type){
        	var fileArr= [];
        	fileArr.push('media/videos/myvideos/poster/'+posterPath.split('/')[2]);
        	if(type === 'original'){
        		fileArr.push('media/videos/myvideos/original/'+mp4VideoPath.split('/')[2]);
        	}else{
        		fileArr.push('media/videos/myvideos/original/'+actualVideoPath.split('/')[2]);
        		fileArr.push('media/videos/myvideos/mp4/'+mp4VideoPath.split('/')[2]);
        	}
        	deleteFiles(fileArr);
        }

        function deleteFiles(files){
			if (files.length === 0){
				res.send({
		        	status: "200",
		        	responseType: "string",
		        	response: "No files to delete"
		      	});
		   	}
		   	else {
		    	for(var i in files){
		    		console.log(files[i]);
			    	fs.unlink(files[i], function(err){
			        	if(err) {
			        		console.log('Error deleting files.');
			        	}
				        else {
				            console.log(files[i] + ' deleted.');
				        }
				    });
		    	}
		    	res.send ({
		        	status: "200",
		        	responseType: "string",
		        	response: "success"
		      	}); 
		   	}
		}
	});
}
/*	//usedSockets[data.userid].emit("ON_VIDEO_PUBLISH", data.videoPath);
});*/