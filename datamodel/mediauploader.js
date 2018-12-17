var path = require('path');
var fs = require('fs');
var multer = require('multer');
var ffmpeg = require('ffmpeg');
var events = require('events');
var uploadedCoverPicPath = '';
var notificationInfo = require('./model/notificationinfo');
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


var uploadAudio = multer({ storage: storage });

var uploadedAudioPath = '';
var audioExt = '';
var audioStorage = multer.diskStorage({
  	destination: function (req, file, cb) {
    	cb(null, 'media/audios/myaudios/original/')
  	},
  	filename: function (req, file, cb) {
  		audioExt = path.extname(file.originalname);
  		uploadedAudioPath = 'audio_'+Date.now()+audioExt;

    	cb(null, uploadedAudioPath); //Appending extension
  	}
});

//Feed Music Upload storage settings

var uploadFeedMusic = multer({ storage: storage });
var uploadedFeedMusicPath = '';
var feedMusicExt = '';
var feedMusicStorage = multer.diskStorage({
  	destination: function (req, file, cb) {
    	cb(null, 'media/audios/feedaudios/original/')
  	},
  	filename: function (req, file, cb) {
  		feedMusicExt = path.extname(file.originalname);
  		uploadedFeedMusicPath = 'music_'+Date.now()+feedMusicExt;

    	cb(null, uploadedFeedMusicPath); //Appending extension
  	}
});

var uploadPhoto = multer({ storage: storage });

var uploadedPhotoPath = '';
var photoExt = '';
var photoStorage = multer.diskStorage({
  	destination: function (req, file, cb) {
    	cb(null, 'media/photos/myphotos/original/')
  	},
  	filename: function (req, file, cb) {
  		photoExt = path.extname(file.originalname);
  		uploadedPhotoPath = 'photo_'+Date.now()+photoExt;

    	cb(null, uploadedPhotoPath); //Appending extension
  	}
});


var recentVideoFile = {};
var videoUpload = multer({ storage: videoStorage });
var audioUpload = multer({ storage: audioStorage });
var feedMusicUpload = multer({ storage: feedMusicStorage });
var photoUpload = multer({ storage: photoStorage });

var userInfo = require('./model/userinfo');
var videoInfo = require('./model/videoinfo');
var audioInfo = require('./model/audioinfo');
var photosInfo = require('./model/photosinfo');

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
		var albumTitle = req.body.album;
		var fullName = req.body.fullname;
		var profilePic = req.body.profilepic;
		var fileName = req.body.fileName;
		/*try{
			if(ssn === undefined){
				res.json({"status": "sessionExpired", "message": "Please Login"});
				return;
			}
		}catch(err){
			res.json({"status": "sessionExpired", "message": "Please Login"});
			return;
		}*/
		var albumDesc = '';
		
		processVideo(userId, albumTitle, albumDesc);
		res.json({"status": "success", "message": "Video Uploaded"});
		function processVideo(userId, albumTitle, albumDesc){
			var actualVideoPath = 'media/videos/myvideos/original/'+uploadedVideoPath;
			var saveVideoPathMP4 = 'media/videos/myvideos/mp4/video_'+Date.now()+'.mp4';
			//var saveVideoPathWEBM = 'media/videos/myvideos/webm/video_'+Date.now()+'.webm';
			//var saveVideoPathOGG = 'media/videos/myvideos/ogg/video_'+Date.now()+'.ogg';
			var emtr = new events.EventEmitter();
			var videoReadyArr = [];
			var posterImg = '';
			
			try {
				if (fs.existsSync(actualVideoPath)) {
					console.log('actual video path'+ actualVideoPath);
					var process = new ffmpeg(actualVideoPath);
					process.then(function (video) {
						var posterPath = 'media/videos/myvideos/poster/';
						video.setVideoAspectRatio('16:9')
						video.fnExtractFrameToJPG(posterPath, {
							frame_rate : 1,
							number : 1,
							file_name : 'poster_'+Date.now()
						}, function (error, files) {
							let videoObj = {};
							videoObj.fileName = fileName;
							if (!error){
								console.log('Frames: ' + files);
								posterImg = files[files.length-1];
								posterImg = 'video/poster/'+posterImg.split('/poster/')[1]; //Setting the virtual path
								
								videoObj.extension = 'mp4';
								videoObj.fullname = fullName;
								videoObj.userid = userId;

								if(videoExt !== '.mp4'){
									console.log('video Ext'+videoExt);
									video.save(saveVideoPathMP4, function (error, file) {
										if (!error){
											console.log('Video file: ' + file);
											saveVideoPathMP4 = 'video/mp4/'+saveVideoPathMP4.split('/mp4/')[1];//Setting virtual path
											videoObj.videoPath = saveVideoPathMP4;
											videoObj.conversion = 'success';
											emtr.emit('onVideoReady', videoObj);
											
										}	
									});
								}else{
									//saveVideoPathMP4 = actualVideoPath;
									
									saveVideoPathMP4 = 'video/original/'+uploadedVideoPath//Setting virtual path
									videoObj.videoPath = saveVideoPathMP4;
									videoObj.conversion = 'success';
									emtr.emit('onVideoReady', videoObj);
									console.log('The format is mp4, so keeping it as original poster'+posterImg);
									
								}


							}else{
								console.log('Error Converting Videos'+error);
								videoObj.videoPath = 'N/A';
								videoObj.extension = 'N/A';
								videoObj.conversion = 'failure';
								emtr.emit('onVideoReady', videoObj);
							}
						});


						/*if(videoExt !== '.webm'){
							video.save(saveVideoPathWEBM, function (error, file) {
								if (!error){
									console.log('Video file: ' + file);
									saveVideoPathWEBM = 'video/webm/'+saveVideoPathWEBM.split('/webm/')[1];//Setting virtual path
									emtr.emit('onVideoReady', 'webm');
								}
							});
						}else{
							saveVideoPathWEBM = actualVideoPath;
							saveVideoPathWEBM = 'video/original/'+saveVideoPathWEBM.split('/webm/')[1];//Setting virtual path
							emtr.emit('onVideoReady', 'webm');
							console.log('The format is webm, so keeping it as original');
						}*/

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
				//console.log('Here are the arguments' + data);
				if(data.extension === 'mp4'){
					videoReadyArr.push('mp4');
				}
				/*if(data === 'webm'){
					videoReadyArr.push('webm');
				}*/
				if(data.conversion === 'failure'){
					updateVideoList(userId, albumTitle, albumDesc, 'N/A', 'N/A', data);
				}
				if(videoReadyArr.length === 1){
					videoReadyArr = [];
					//console.log('un formatted video'+saveVideoPathMP4);
					updateVideoList(userId, albumTitle, albumDesc, saveVideoPathMP4, posterImg, data);
				}
			});
		}

		function updateVideoList(userId, albumTitle, albumDesc, saveVideoPathMP4, posterImg, data){
			var videoObj = {}
			videoObj.actualVideo = 'video/original/'+uploadedVideoPath;
			videoObj.oggVideo = '';
			videoObj.webmVideo = '';
			videoObj.mp4Video = saveVideoPathMP4;
			videoObj.poster = posterImg;
			var itemId = '';
			

			videoInfo.findOne({userid: userId, title: albumTitle}, function(err, info){
				var operation = '';
				var videosList = [];
				if(err){
					res.send(err);
				}else{
					if(data.conversion === 'success'){
						if(info === null){
							operation = 'create';
							videosList.push(videoObj);
							videoInfo.create({
								userid : userId,
								title: albumTitle,
								description: albumDesc,
								videosList : videosList,
								fileName: data.fileName,
								albumCover : '',
								sharedWith: []
							}, function(err, info) {
								if (err){
									console.log("Error"+err);
								}else{
									//res.json({"status": "success", "message": "Album created successfully", "info": info});
									itemId = info._id;
									configureNotification(data, posterImg, itemId);
								}
							});	

						}else{
							operation = 'update';
							videosList = info.videosList;
							videosList.push(videoObj);
							itemId = info._id;
							videoInfo.update({userid: userId, title: albumTitle}, {$set: {videosList: videosList}}, function(err, info){
								if(err){
									console.log("Error"+err);
									//res.json({"status": "failure", "message": "Failed to update video now, please try again later."});
								}else{
									//res.json({"status": "success", "message": "Video updated successfully.", "info": info});

									configureNotification(data, posterImg, itemId);
								}
							});
						}
					}else{
						configureNotification(data, 'N/A', 'N/A');
					}
				}
			});
		}

		function configureNotification(obj, pic, itemId){
			var dateNow = new Date();
			notificationInfo.create({
				userid : userId,
				itemid: itemId,
				fullname : fullName,
				profilepic : profilePic,
				notificationpic: pic,
				type : 'video',
				text : '',
				filepath : obj.videoPath,
				filename : obj.fileName,
				notificationmodule : 'videoAlbum',
				conversion: obj.conversion,
				isReady : true,
				state : 'shown',
				isShown : false
			}, function(err, info) {
				if (err){
					console.log('issue configuring notification');
				}else{
					console.log("Notification Configured");
				}
			});	
		}

	});

	app.post('/api/uploadAudio', audioUpload.single('uploadfile'), (req, res) => {
		console.log('file uploaded');
		var userId = req.body.userid;
		var albumTitle = req.body.album;
		var albumDesc = '';
		processAudio(userId, albumTitle, albumDesc);
		function processAudio(userId, albumTitle, albumDesc){
			var actualAudioPath = 'media/audios/myaudios/original/'+uploadedAudioPath;
			//var saveAudioPathMP3 = 'media/videos/myvideos/mp4/video_'+Date.now()+'.mp3';
			var emtr = new events.EventEmitter();
			var audioReadyArr = [];
			var posterImg = '';
			//No need of conversion
			updateAudioList(userId, albumTitle, albumDesc, actualAudioPath, posterImg);
			emtr.on('onAudioReady', function (data) {

			});
		}

		function updateAudioList(userId, albumTitle, albumDesc, actualAudioPath, posterImg){
			var audioObj = {}
			audioObj.actualAudio = 'audio/original/'+uploadedAudioPath;
			//audioObj.mp3Audio = actualAudioPath;
			audioObj.poster = posterImg;
			

			audioInfo.findOne({userid: userId, title: albumTitle}, function(err, info){
				var operation = '';
				var audiosList = [];
				if(err){
					res.send(err);
				}else{
					if(info === null){
						operation = 'create';
						audiosList.push(audioObj);
						audioInfo.create({
							userid : userId,
							title: albumTitle,
							description: albumDesc,
							audiosList : audiosList,
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
						operation = 'update';
						audiosList = info.audiosList;
						audiosList.push(audioObj);
						audioInfo.update({userid: userId, title: albumTitle}, {$set: {audiosList: audiosList}}, function(err, info){
							if(err){
								console.log("Error"+err);
								res.json({"status": "failure", "message": "Failed to update video now, please try again later."});
							}else{
								res.json({"status": "success", "message": "Audio updated successfully.", "info": info});
							}
						});
					}
				}
			});
		}

	});

	app.post('/api/uploadMusicFeed', feedMusicUpload.single('uploadfile'), (req, res) => {
		console.log('file uploaded');
		var userId = req.body.userid;
		//processAudio(userId, albumTitle, albumDesc);
		//function processAudio(userId){
			var actualAudioPath = 'media/audios/myaudios/original/'+uploadedFeedMusicPath;
			var savedMusicPath = '/music/'+uploadedFeedMusicPath;
			res.json({"status": "success", "musicPath": savedMusicPath});
			//var saveAudioPathMP3 = 'media/videos/myvideos/mp4/video_'+Date.now()+'.mp3';
			/*var emtr = new events.EventEmitter();
			var audioReadyArr = [];
			var posterImg = '';
			//No need of conversion
			updateAudioList(userId);
			emtr.on('onAudioReady', function (data) {

			});
		}*/

		/*function updateAudioList(userId){
			var audioObj = {}
			audioObj.actualAudio = 'music/original/'+uploadedFeedMusicPath;
			//audioObj.mp3Audio = actualAudioPath;
			audioObj.poster = posterImg;
			

			audioInfo.findOne({userid: userId, title: albumTitle}, function(err, info){
				var operation = '';
				var audiosList = [];
				if(err){
					res.send(err);
				}else{
					if(info === null){
						operation = 'create';
						audiosList.push(audioObj);
						audioInfo.create({
							userid : userId,
							title: albumTitle,
							description: albumDesc,
							audiosList : audiosList,
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
						operation = 'update';
						audiosList = info.audiosList;
						audiosList.push(audioObj);
						audioInfo.update({userid: userId, title: albumTitle}, {$set: {audiosList: audiosList}}, function(err, info){
							if(err){
								console.log("Error"+err);
								res.json({"status": "failure", "message": "Failed to update video now, please try again later."});
							}else{
								res.json({"status": "success", "message": "Audio updated successfully.", "info": info});
							}
						});
					}
				}
			});
		}*/

	});


	app.post('/api/uploadPhotos', photoUpload.single('uploadfile'), (req, res) => {
		console.log('file uploaded');
		var userId = req.body.userid;
		var albumTitle = req.body.album;
		var albumDesc = '';
		
		processPhoto(userId, albumTitle, albumDesc);
		function processPhoto(userId, albumTitle, albumDesc){
			var actualPhotoPath = 'media/photos/myphotos/original/'+uploadedPhotoPath;
			var emtr = new events.EventEmitter();
			var photoReadyArr = [];
			var posterImg = '';
			//No need of conversion
			updatePhotoList(userId, albumTitle, albumDesc, actualPhotoPath, posterImg);

			emtr.on('onPhotoReady', function (data) {

			});
		}

		function updatePhotoList(userId, albumTitle, albumDesc, actualPhotoPath, posterImg){
			var photoObj = {}
			photoObj.actualPhoto = 'photo/original/'+uploadedPhotoPath;
			//audioObj.mp3Audio = actualAudioPath;
			photoObj.poster = posterImg;
			

			photosInfo.findOne({userid: userId, title: albumTitle}, function(err, info){
				var operation = '';
				var photosList = [];
				if(err){
					res.send(err);
				}else{
					if(info === null){
						operation = 'create';
						photosList.push(photoObj);
						photosInfo.create({
							userid : userId,
							title: albumTitle,
							description: albumDesc,
							photosList : photosList,
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
						operation = 'update';
						photosList = info.photosList;
						photosList.push(photoObj);
						photosInfo.update({userid: userId, title: albumTitle}, {$set: {photosList: photosList}}, function(err, info){
							if(err){
								console.log("Error"+err);
								res.json({"status": "failure", "message": "Failed to update photo now, please try again later."});
							}else{
								res.json({"status": "success", "message": "Photo updated successfully.", "info": info});
							}
						});
					}
				}
			});
		}

	});
}