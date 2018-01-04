import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'app/services/validators/validation.service';
import { AppSettingsService } from 'app/services/settings/app-settings.service';
import { VideoService } from 'app/services/data/video.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers: [VideoService]
})
export class VideoPlayerComponent implements OnInit {

	private files: any;
	private userId: string = '';
	private videoUploadForm: any;
	private videoGroup: any;
	private uploadProgress: number = 0;
	private isProgress: boolean = false;
	private albumForm : any;
	private videoAlbumList: any;
	private albumTitle = '';
	private albumDesc = '';
	private isCreateAlbum: boolean = false;
	private isAddAlbum: boolean = false;
	private isUpdateAlbum: boolean = false;
	private albumInfo : any;

  	constructor(private formBuilder: FormBuilder, private videoService: VideoService) { 
  		let loginData = JSON.parse(localStorage.getItem('loginData'));
	    this.userId = loginData.username;

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
	private fileChangeEvent(event){
		let self = this;
		let userId = this.userId;
		let file: any;
		if (event.target.files && event.target.files[0]) {
			file = event.target.files[0];
			uploadVideo();
		}
		function uploadVideo() {
			let formData = new FormData();
			formData.append('uploadfile', file);
			formData.append('userid', userId);
			formData.append('album', null)
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
				alert('An error occurred while submitting the form. Maybe your file is too big');
			};
			xhr.onload = function() {
				/*let file = xhr.responseText;
				$('div.progress div').css('width','0%');
				$('div.progress').hide();
				showMsg("alert alert-success", "File uploaded successfully!");
				$('#myFile').val('');*/
				self.fetchVideoAlbumInfo();
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

	private afterVideoAbumInfo(result){
		this.videoAlbumList = result;
	}

	private editVideoAlbum(event){
		this.albumInfo = event.data;
  		this.isCreateAlbum = true;
  		this.isAddAlbum = false;
		this.isUpdateAlbum = true;
  		this.albumTitle = this.albumInfo.title;
  		this.albumDesc = this.albumInfo.description;

  	}

}
