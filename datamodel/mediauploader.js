var path = require('path');
var fs = require('fs');
var multer = require('multer');
var path = require('path');
var ffmpeg = require('ffmpeg');
var events = require('events');
var uploadedCoverPicPath = '';
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/images/coverpics/')
  },
  filename: function (req, file, cb) {
  	uploadedCoverPicPath = 'coverpic_'+Date.now()+path.extname(file.originalname);
    cb(null, uploadedCoverPicPath); //Appending extension
  }
});

var upload = multer({ storage: storage });

var uploadedVideoPath = '';
var videoExt = '';
var videoStorage = multer.diskStorage({
  	destination: function (req, file, cb) {
    	cb(null, 'media/videos/myvideos/original/')
  	},
  	filename: function (req, file, cb) {
  		videoExt = path.extname(file.originalname);
  		uploadedVideoPath = 'video_'+Date.now()+videoExt;

    	cb(null, uploadedVideoPath); //Appending extension
  	}
});

var recentVideoFile = {};
var videoUpload = multer({ storage: videoStorage });

var userInfo = require('./model/userinfo');
var videoInfo = require('./model/videoinfo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.post('/api/uploadEncodedProfilePic', function(req, res) {
		/*try{
			if(ssn === undefined){
				res.json({"status": "sessionExpired", "message": "Please Login"});
				return;
			}
		}catch(err){
			res.json({"status": "sessionExpired", "message": "Please Login"});
			return;
		}
		*/

		var profilePicObj = {};
		profilePicObj.previewPicDimension = req.body.previewpicdimension;
		profilePicObj.profilePicDimension = req.body.profilepicdimension;
		profilePicObj.imageBuffer = req.body.imagebuffer;
		var userId = req.body.userid;
		console.log("req.body.userid;"+req.body.userid);

		
		userInfo.update({username: userId}, {$set: {profilepic: profilePicObj}}, function(error, info){
			if(error){
				console.log("Error"+error);
				res.json({"status": "failure", "message": "Failed to update profile pic now, please try again later."});
			}else{
				userInfo.findOne({username: userId}, function(err, info){
					if(err){
						console.log(err);
					}else{
						res.json({"status": "success", "message": "Profile Pic Updated Successfully", "info": info});
					}
				});
			}
		});
		
    });

    //Cover Pic Upload
	app.post('/api/uploadCoverPic', upload.single('uploadfile'), (req, res) => {
		var userId = req.body.userid;
		var coverPicPos = req.body.coverpicpos;
		/*try{
			if(ssn === undefined){
				res.json({"status": "sessionExpired", "message": "Please Login"});
				return;
			}
		}catch(err){
			res.json({"status": "sessionExpired", "message": "Please Login"});
			return;
		}*/

		uploadedCoverPicPath = 'data/'+uploadedCoverPicPath;
		userInfo.findOne({username: userId}, function(err, info){
			if(err){
				res.send(err);
			}else{
				if(info.wallpicpath !== ''){
					var actualCoverPicPath = 'media/images/coverpics'+info.wallpicpath.replace('data/', '/');
					console.log('><'+actualCoverPicPath);
					if (fs.existsSync(actualCoverPicPath)) {
					    // Do something
					    console.log('cover pic exists');
					    fs.unlinkSync(actualCoverPicPath);
					}
				}

				//res.json({"status": "success","message": "This User "+info.fullname+ " already Exists", "info": info});
				userInfo.update({username: userId}, {$set: {wallpicpath: uploadedCoverPicPath, wallpicpos: coverPicPos}}, function(error, info){
					if(error){
						res.json({"status": "failure", "message": "Failed to update profile pic now, please try again later."});
					}else{
						res.json({"status": "success", "message": "Cover Pic Uploaded Successfully", "wallpicpath": uploadedCoverPicPath});
					}
				});
			}
		});

	});


	app.post('/api/saveCoverPicPos',  function(req, res){
		var coverPicPos = req.body.coverpicpos;
		var userId = req.body.userid;
		/*try{
			if(ssn === undefined){
				res.json({"status": "sessionExpired", "message": "Please Login"});
				return;
			}
		}catch(err){
			res.json({"status": "sessionExpired", "message": "Please Login"});
			return;
		}*/
		userInfo.update({username: userId}, {$set: {wallpicpos: coverPicPos}}, function(error, info){
			if(error){
				res.json({"status": "failure", "message": "Failed to update cover pic position now, please try again later."});
			}else{
				res.json({"status": "success", "message": "Cover Pic Position Updated Successfully", "wallpicpos": info.wallpicpos});
			}
		});
	});

	    //Cover Pic Upload
	app.post('/api/uploadVideo', videoUpload.single('uploadfile'), (req, res) => {
		console.log('file uploaded');
		var userId = req.body.userid;
		/*try{
			if(ssn === undefined){
				res.json({"status": "sessionExpired", "message": "Please Login"});
				return;
			}
		}catch(err){
			res.json({"status": "sessionExpired", "message": "Please Login"});
			return;
		}*/


		videoInfo.findOne({userid: userId, title: 'untitled'}, function(err, info){
			var operation = '';
			var videosList = [];
			if(err){
				res.send(err);
			}else{
				if(info == null){
					operation = 'create';

				}else{
					operation = 'update';
					videosList = info.videosList;
				}
				processVideo(userId, operation, videosList);
			}
		});

		function processVideo(userId, operation, videosList){
			var actualVideoPath = 'media/videos/myvideos/original/'+uploadedVideoPath;
			var saveVideoPathMP4 = 'media/videos/myvideos/mp4/video_'+Date.now()+'.mp4';
			var saveVideoPathWEBM = 'media/videos/myvideos/webm/video_'+Date.now()+'.webm';
			var saveVideoPathOGG = 'media/videos/myvideos/ogg/video_'+Date.now()+'.ogg';
			var emtr = new events.EventEmitter();
			var videoReadyArr = [];
			var posterImg = '';
			
			try {
				if (fs.existsSync(actualVideoPath)) {
					var process = new ffmpeg(actualVideoPath);
					process.then(function (video) {
						var posterPath = 'media/videos/myvideos/poster/';
						video.fnExtractFrameToJPG(posterPath, {
							frame_rate : 1,
							number : 1,
							file_name : 'poster_'+Date.now()+'jpg'
						}, function (error, files) {
							if (!error){
								console.log('Frames: ' + files);
								posterImg = files[1];
							}
						});

						if(videoExt !== '.mp4'){
							video.save(saveVideoPathMP4, function (error, file) {
								if (!error){
									console.log('Video file: ' + file);
									emtr.emit('onVideoReady', 'mp4');
								}	
							});
						}else{
							console.log('The format is mp4, so keeping it as original');
						}

						if(videoExt !== '.webm'){
							video.save(saveVideoPathWEBM, function (error, file) {
								if (!error){
									console.log('Video file: ' + file);
									emtr.emit('onVideoReady', 'webm');
								}
							});
						}else{
							console.log('The format is webm, so keeping it as original');
						}

						//ogg format is not supporting right now.
						/*video.save(saveVideoPathOGG, function (error, file) {
							if (!error)
								console.log('Video file: ' + file);
						});*/

					}, function (err) {
						console.log('Error: ' + err);
					});
				}
			} catch (e) {
				console.log(e.code);
				console.log(e.msg);
			}

			emtr.on('onVideoReady', function (data) {
				console.log('Here are the arguments' + data);
				if(data === 'mp4'){
					videoReadyArr.push('mp4');
				}
				if(data === 'webm'){
					videoReadyArr.push('webm');
				}
				if(videoReadyArr.length === 2){
					videoReadyArr = [];
					updateVideoList(operation, userId, videosList, saveVideoPathWEBM, saveVideoPathMP4, posterImg);
				}
			});
		}

		function updateVideoList(operation, userId, videosList, saveVideoPathWEBM, saveVideoPathMP4, posterImg){
			var videoObj = {}
			videoObj.actulaVideo = 'video/original/'+uploadedVideoPath;
			videoObj.oggVideo = '';
			videoObj.webmVideo = saveVideoPathWEBM;
			videoObj.mp4Video = saveVideoPathMP4;
			videoObj.poster = posterImg;
			videosList.push(videoObj);
			if(operation === 'create'){
				videoInfo.create({
					userid : userId,
					title: 'untitled',
					description: 'Untitled Album',
					videosList : videosList,
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
				videoInfo.update({userid: userId, title: 'untitled'}, {$set: {videosList: videosList}}, function(err, info){
					if(err){
						console.log("Error"+err);
						res.json({"status": "failure", "message": "Failed to update video now, please try again later."});
					}else{
						res.json({"status": "success", "message": "Video updated successfully.", "info": info});
					}
				});
			}
		}

		/*try {
			var actualVideoPath = 'media/videos/myvideos/original/'+uploadedVideoPath;
			var saveVideoPath = 'media/videos/myvideos/mp4/video_'+Date.now()+'.mp4';
			if (fs.existsSync(actualVideoPath)) {
				console.log('video exist');
				var process = new ffmpeg(actualVideoPath);
				process.then(function (video) {
					video.setVideoSize('640x360', true, true, '#fff')
					.setAudioChannels(2)
					.setVideoAspectRatio('16:9')
					.setVideoBitRate(1024)
					.setVideoFormat('mp4')
					.save(saveVideoPath, function (error, file) {
						if (!error)
							console.log('Video file: ' + file);
					});

				}, function (err) {
					console.log('Error: ' + err);
				});
			}

		} catch (e) {
			console.log(e.code+saveVideoPath);
			console.log(e);
		}*/


	});
}