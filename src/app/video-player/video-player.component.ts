import { Component, ViewChild, ViewContainerRef, ElementRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../app/services/validators/validation.service';
import { AppSettingsService } from '../../app/services/settings/app-settings.service';
import { VideoService } from '../../app/services/data/video.service';
import { VideoListComponent } from '../video-list/video-list.component';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers: [VideoService]
})
export class VideoPlayerComponent implements OnInit {

	@ViewChild('videoPlayer') videoPlayer: ElementRef;
	@ViewChild('videoList', {read: ViewContainerRef}) videoList: ViewContainerRef;

	private files: any;
	private userId: string = '';
	private fullName: string = '';
	private profilePic: string = '';
	private videoUploadForm: any;
	private videoGroup: any;
	private uploadProgress: number = 0;
	private isProgress: boolean = false;
	private albumForm : any;
	private videoAlbumList: any;
	private videosList: any;
	private albumTitle = '';
	private albumDesc = '';
	private isCreateAlbum: boolean = false;
	private isAddAlbum: boolean = false;
	private isUpdateAlbum: boolean = false;
	private isVideoAlbum: boolean = true;
	private isAlbumVideo: boolean = false;
	private albumInfo : any;
	private videoInfo: any;
	private loadCount: number = 0;
	private mp4VideoPath = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
	private webmVideoPath = 'https://media.w3.org/2010/05/sintel/trailer.webm';
	private posterPath = 'https://media.w3.org/2010/05/sintel/poster.png';
	private videoListRef: any;
	private videoSource: string[] = [];
	private videoListComponent: any;

  	constructor(private formBuilder: FormBuilder, private videoService: VideoService, private componentFactoryResolver: ComponentFactoryResolver) { 
  		this.loadCount = 0;
  		let loginData = JSON.parse(localStorage.getItem('loginData'));
	    this.userId = loginData.username;
	    this.fullName = loginData.fullname;
	    this.profilePic = JSON.stringify(loginData.profilepic);

	    this.videoUploadForm = this.formBuilder.group({
		  'file': ['']
		});

		this.videoGroup = new FormGroup({
	       file: new FormControl()
	    });

	    this.albumForm = this.formBuilder.group({
	      'albumTitle': ['', [Validators.required, ValidationService.blankDataValidator]],
	      'albumDesc': ['', [Validators.required, ValidationService.blankDataValidator]]
	    });

	    this.fetchVideoAlbumInfo();
  	}

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
  		this.videoPlayer.nativeElement.addEventListener("ended", onPlayNextVideo);
    	this.videoPlayer.nativeElement.addEventListener("pause", onPauseVideo);
    	this.videoPlayer.nativeElement.addEventListener("play", onPlayVideo);
    	let self = this;
    	function onPlayNextVideo(){
  			self.triggerDocumentEvent('playNextVideo', {'event': 'playNextVideo', 'eventObj': ''});
  		}
	  	function onPauseVideo(){
	  		self.triggerDocumentEvent('onPauseVideo', {'event': 'onPauseVideo', 'eventObj': ''});
	  	}
  		function onPlayVideo(){
  			self.triggerDocumentEvent('onPlayVideo', {'event': 'onPauseVideo', 'eventObj': ''});
  		}
  	}


	private fileChangeEvent(event, directUpload){
		let self = this;
		if(self.loadCount > 0){
			alert('Please wait while we are processing your previous video.');
			return;
		}
		let userId = this.userId;
		let fullName = this.fullName;
		let profilePic = this.profilePic;
		let file: any;
		if (event.target.files && event.target.files[0]) {
			file = event.target.files[0];
			let fileName = event.target.files[0].name;
			uploadVideo(fileName);
		}
		function uploadVideo(fileName) {
			self.loadCount++;
			let formData = new FormData();
			formData.append('uploadfile', file);
			formData.append('userid', userId);
			formData.append('fullname', fullName);
			formData.append('profilepic', profilePic);
			formData.append('fileName', fileName);
			//formData.append('fullname', );
			if(!directUpload){
				formData.append('album', self.videoInfo.title);
			}else{
				formData.append('album', 'untitled');
			}

			let xhr = new XMLHttpRequest();
			xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadVideo', true);
			xhr.upload.onprogress = function(e) {
				if (e.lengthComputable) {
					let percentage = (e.loaded / e.total) * 100;
					console.log(percentage);
					if((percentage > 0) && (percentage < 100)){
						self.isProgress = true;
					}else{
						self.isProgress = false; 
					}
					self.uploadProgress = percentage;

					//$('div.progress div').css('width', percentage.toFixed(0) + '%');
					//$('div.progress div').html(percentage.toFixed(0) + '%');
				}
			};

			xhr.onerror = function(e) {
				if(self.loadCount> 0){
					self.loadCount--;
				}
				alert('An error occurred while submitting the form. Maybe your file is too big');
			};
			xhr.onload = function() {
				/*let file = xhr.responseText;
				$('div.progress div').css('width','0%');
				$('div.progress').hide();
				showMsg("alert alert-success", "File uploaded successfully!");
				$('#myFile').val('');*/
				if(self.isVideoAlbum){
					self.fetchVideoAlbumInfo();
				}else{
					self.fetchAlbumVideoInfo();	
				}
				if(self.loadCount> 0){
					self.loadCount--;
				}
				
			};

			xhr.onreadystatechange = function()
		    {
		        if (xhr.readyState == 4 && xhr.status == 200)
		        {
		            callback(xhr.responseText); // Another callback here
		        }
		    }; 

		    function callback(responseText){
		    	if(JSON.parse(responseText).status === 'sessionExpired'){
		    		alert('Session Expired, Please Login Again');
		    	}
		    }

			xhr.send(formData);
			return false;
		}

	//var files = fileInput.srcElement.files;
	//console.log(files);
	//this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
	//  console.log('sent');
	//});
	}

	 private createAlbumInfo(event){
	    if (this.albumForm.dirty && this.albumForm.valid) {
	     // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
	      let postObj = {'username': this.userId,
	      	'title': this.albumForm.value.albumTitle,
	        'desc': this.albumForm.value.albumDesc};
	        this.videoService.createVideoAlbum(postObj).subscribe(data => this.afterAlbumCreated(data));
	    }
	}

	private afterAlbumCreated(result) {
      if(result.status === 'failure'){
      	alert(result.message);
      }else{
      	this.cancelAlbum(null);
      	//alert(result.message);
      	this.fetchVideoAlbumInfo();

      }
  	}

	 private updateAlbumInfo(event){
	    if (this.albumForm.dirty && this.albumForm.valid) {
	     // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
	      let postObj = {'id': this.albumInfo._id,
	      	'username': this.userId,
	      	'title': this.albumForm.value.albumTitle,
	        'desc': this.albumForm.value.albumDesc};
	        this.videoService.updateVideoAlbum(postObj).subscribe(data => this.afterAlbumUpdated(data));
	    }
	}

	private afterAlbumUpdated(result) {
    	if(result.status === 'failure'){
      		alert(result.message);
      	}else{
      		this.cancelAlbum(null);
      		//alert(result.message);
      		this.fetchVideoAlbumInfo();
      	}
  	}

	private createVideoAlbum(event){
		this.isCreateAlbum = true;
		this.isAddAlbum = true;
		this.isUpdateAlbum = false;
	}

	private cancelAlbum(event){
		this.isCreateAlbum = false;
		this.isAddAlbum = false;
		this.isUpdateAlbum = false;
		this.albumForm.reset();
	}

	private fetchVideoAlbumInfo(){
		let postObj = {'username': this.userId};
	    this.videoService.fetchVideoAlbumInfo(postObj).subscribe(data => this.afterVideoAbumInfo(data));
	}

	private fetchAlbumVideoInfo(){
		let postObj = {'username': this.userId, 'album': this.albumTitle};
	    this.videoService.fetchAlbumVideoInfo(postObj).subscribe(data => this.afterAbumVideoInfo(data));
	}

	/*private setNotification(){
		var dateNow = new Date();
		notificationInfo.create({
			userid : req.body.username,
			fullname : req.body.fullname,
			profilepic : req.body.profilePicObj,
			type : req.body.notificationType,
			text : req.body.notificationText,
			filePath : req.body.filePath,
			isReady : req.body.isReady,
			isShown : req.body.isShown
		}, function(err, info) {
			if (err){
				res.send(err);
			}else{
				res.json({"status": "success", "message": "Notification Configured", "info": info});
			}
		});	
	}*/
	private afterVideoAbumInfo(result){
		this.videoAlbumList = result;
		if(result.length > 0){
			this.videoSource = [];
			this.videoSource = this.videoAlbumList[0].videosList;
			if(this.videoSource && (this.videoSource.length > 0)){
				this.createVideoList(this.videoSource);
				this.playVideo(this.videoAlbumList[0].videosList[0], -1);
			}
		}
 	
	}
	private afterAbumVideoInfo(result){
		this.videosList = result[0].videosList;
	}

	//Need to activate/deactivate edit btn later based on changes in title field
	private editVideoAlbum(event){
		this.albumInfo = event.data;
  		this.isCreateAlbum = true;
  		this.isAddAlbum = false;
		this.isUpdateAlbum = true;
  		this.albumTitle = this.albumInfo.title;
  		this.albumDesc = this.albumInfo.description;

  	}
  	//Diplaying the list of videos under a particular video album
  	private showVideoList(event){
  		this.videoInfo = event.data;
  		this.isVideoAlbum = false;
  		this.isAlbumVideo = true;
  		this.videosList = this.videoInfo.videosList;
  		this.albumTitle = this.videoInfo.title;

  	}

  	private goToMyAlbum(event){
  		this.isVideoAlbum = true;
  		this.isAlbumVideo = false;
  		this.fetchVideoAlbumInfo();
  	}

  	private playVideo(data, indx){
  		console.log(data);
  		this.videoPlayer.nativeElement.pause();
  		this.posterPath = data.poster;
  		this.mp4VideoPath = data.mp4Video;
  		//this.webmVideoPath = data.webmVideo;
  		try{
			this.videoListRef.instance.mp4Video = this.mp4VideoPath;
			this.videoListRef.instance.itemCount = indx;
			if(indx === -1){
				this.videoListRef.instance.itemCount = 0;
			}
			
			if(indx !== -1){
				//this.smoothItemScroll(this.mp3AudioPath);
				this.videoListRef.instance.smoothItemScroll();
			}
  			this.videoPlayer.nativeElement.load();
  			this.videoPlayer.nativeElement.play();		
		}catch(err){
			console.log(err);
		}
  	}

  	private playVideeo(data){
		this.videoPlayer.nativeElement.pause();
  		this.posterPath = data.poster;
  		this.mp4VideoPath = data.mp4Video;
		try{
			this.videoPlayer.nativeElement.load();
			this.videoPlayer.nativeElement.play();			
		}catch(err){
			console.log(err);
		}
  	}

  	private createVideoList(videoSource){
    	if(this.videoListRef){
    		this.videoListRef.instance.playVideo.unsubscribe((data) => this.playVideeo(data));
    		this.videoListRef.instance.pauseVideo.unsubscribe((data) => this.pauseVideo(data));
    		this.videoListRef.instance.resumeVideo.unsubscribe((data) => this.resumeVideo(data));
    		//this.videoPlayer.nativeElement.removeEventListener("ended", this.playNextItem());
    		this.videoListRef.instance.replayVideo.unsubscribe((data) => this.replayVideo(data));
    		this.videoListRef.instance.removeEventListeners();
    		this.videoListRef.instance.videoSource = [];
    		this.videoListRef.instance.mp4Video = '';
      		this.videoListRef.destroy();
    	}
    	this.videoListComponent = this.componentFactoryResolver.resolveComponentFactory(VideoListComponent);
    	this.videoListRef = this.videoList.createComponent(this.videoListComponent);
    	this.videoListRef.instance.videoSource = videoSource;
    	this.videoListRef.instance.mp4Video = videoSource[0].mp4Video;
    	this.videoListRef.instance.playVideo.subscribe((data) => this.playVideeo(data));
    	this.videoListRef.instance.pauseVideo.subscribe((data) => this.pauseVideo(data));
    	this.videoListRef.instance.resumeVideo.subscribe((data) => this.resumeVideo(data));
    	this.videoListRef.instance.replayVideo.subscribe((data) => this.replayVideo(data));
    	//this.videoPlayer.nativeElement.addEventListener("ended", this.playNextItem());

  	}
  	private playNextItem(){
  		alert('video ended');
  	}

  	private replayVideo(data){
  		this.videoPlayer.nativeElement.currentTime = 0;
  		//this.videoPlayer.nativeElement.play();	
  	}

  	private pauseVideo(data){
		this.videoPlayer.nativeElement.pause();
  	}
  	private resumeVideo(data){
  		this.videoPlayer.nativeElement.play();
  	}

	private triggerDocumentEvent(eventType, evtObj) {
		var evt = new CustomEvent(eventType, {'detail': evtObj});
	  	document.dispatchEvent(evt);
	}

}
