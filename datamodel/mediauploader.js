var path = require('path');
var fs = require('fs');
var multer = require('multer');
var path = require('path');
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
var videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/videos/myvideos/')
  },
  filename: function (req, file, cb) {
  	uploadedVideoPath = 'video_'+Date.now()+path.extname(file.originalname);
    cb(null, uploadedVideoPath); //Appending extension
  }
});

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
					if (fs.existsSync(info.wallpicpath)) {
					    // Do something
					    console.log('cover pic exists');
					    fs.unlinkSync(info.wallpicpath);
					}else{
						console.log('cover pic does not exist');
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

		uploadedVideoPath = 'data/'+uploadedVideoPath;
		videoInfo.findOne({userid: userId, title: 'untitled'}, function(err, info){
			var videosList = [];
			var videoObj = {}
			videoObj.actulaVideo = uploadedVideoPath;
			videoObj.mp4Video = '';
			videoObj.webmVideo = '';
			videoObj.oggVideo = '';
			videosList.push(videoObj);
			if(err){
				res.send(err);
			}else{
				if(info == null){
					console.log('Create untitled album');
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
					//update
					var videosList = [];
					videosList = info.videosList;
					var videoObj = {};
					videoObj.oggVideo = '';
					videoObj.webmVideo = '';
					videoObj.mp4Video = '';
					videoObj.actulaVideo = uploadedVideoPath;
					videosList.push(videoObj);
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
		});

	});
}