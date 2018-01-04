import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UtilityService } from 'app/services/utility/utility.service';
import { ModalService } from '../modal/modal.service';
import { UploadService } from '../services/data/upload.service';


@Component({
  selector: 'app-profile-area',
  templateUrl: './profile-area.component.html',
  styleUrls: ['./profile-area.component.css'],
  providers: [ UploadService ]
})
export class ProfileAreaComponent implements OnInit {

	@ViewChild('croppedPreviewImg') croppedPreviewImg: ElementRef;
	@ViewChild('previewPicModal') previewPicModal;

	private modalId = 'appModal';
	private loginData = undefined;
	private profilePic: string;
	private profilePicWidth: string;
	private profilePicHeight: string;
	private fullName: string;
	private userId: string;
	private profilePicUploadForm: any;
	private profilePicGroup: any;
	private encodedImage: any;
	private files: any;
	private imageChangedEvent: any;
  	private croppedImage: any;
  	private isProfilePicControls: boolean = true;
  	private localStream: any = null;
  	private isCamRendered: boolean = false;

	constructor(private router: Router, private formBuilder: FormBuilder, private modalService: ModalService, private uploadService: UploadService) {
		this.profilePicUploadForm = this.formBuilder.group({
		  'file': ['']
		});

		this.profilePicGroup = new FormGroup({
	       file: new FormControl()
	    });
	}

	ngOnInit() {
		this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.profilePic = this.loginData.profilepic.imageBuffer;
		this.fullName = this.loginData.fullname;
		this.userId = this.loginData.username;
		this.profilePicWidth = UtilityService.getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
		this.profilePicHeight = UtilityService.getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
	}

	private navigateToMyProfile(event){
		this.router.navigate(['profile', this.userId]);
	}

	private openAppModal(){
  		let self = this;
  		self.modalService.open(self.modalId);
  	}

	/*fileChangeEvent(event: any): void {
    	this.imageChangedEvent = event;
  	}*/
  	private imageCropped(image: string) {
    	this.croppedImage = image;
  	}
  	private computeCroppedImage(){
  		let elem = <HTMLElement>document.querySelector('#croppedPreviewImg');
  	}
	private fileChangeEvent(event){
		this.isProfilePicControls = true;
		this.imageChangedEvent = event;
  		this.files = event.target.files[0];
        //this.uploadCanvasPic();
  		var self = this;
      	if (event.target.files && event.target.files[0]) {
        	let reader = new FileReader();
	        reader.onload = function (e : any) {
	            self.encodedImage = e.target.result;
	            self.openAppModal();
	        }

	        reader.readAsDataURL(event.target.files[0]);
	    }
	    /*var files = fileInput.srcElement.files;
	    console.log(files);
	    this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
	      console.log('sent');
	    });*/
	}
	private camInputClick(){
		this.isProfilePicControls = false;
		this.openAppModal();
		if(this.isCamRendered){
			this.onCamRendered();	
		}
		
	}

	private uploadEncodedProfilePic(encodedImage){
		let postObj = {'previewpicdimension': (150+'x'+150), 'profilepicdimension': (75+'x'+75), 'imagebuffer': encodedImage, 'userid': this.userId};
        this.uploadService.uploadEncodedProfilePic(postObj).subscribe(data => this.afterProfilePicUploaded(data));
	}
	private ok(){
		this.uploadEncodedProfilePic(this.croppedImage);
	}


	private capture(){
		let canvas = <HTMLCanvasElement> document.getElementById('profilePicCanvas');
		let dataURI = canvas.toDataURL('image/jpeg', 1.0);
		this.uploadEncodedProfilePic(dataURI);
	}

	private onPicCaptured(){
		this.capture();
	}

	private onCamRendered(){
		this.isCamRendered = true;
		if(!this.isProfilePicControls){
			let _self = this;
			let video = <HTMLVideoElement> document.getElementById('profilePicVideo');
			let canvas = <HTMLCanvasElement> document.getElementById('profilePicCanvas');
			let ctx = canvas.getContext('2d');
			navigator.getUserMedia = navigator.getUserMedia;
			let errorCallback = function(e) {
				console.log('Rejected!', e);
			};
			video.addEventListener('play', function() {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				let self = this; //cache
				(function loop() {
				  if (!self.paused && !self.ended) {
					ctx.drawImage(self, 0, 0, canvas.width, canvas.height);
					setTimeout(loop, 1000 / 30); // drawing at 30fps
				  }
				  
				})();
			}, false);

			if (navigator.getUserMedia) {
				navigator.getUserMedia({audio: false, video: true}, function(stream) {
				//this._self.localStream = stream;
				_self.localStream = stream;
				video.src = window.URL.createObjectURL(stream);
			  }, errorCallback);
			} else {
				alert("Your Browser does not support Camera");
			  //video.src = 'somevideo.webm'; // fallback.
			}
		}
	}

	private afterProfilePicUploaded(result){
		//alert(result.message);
		if(result.status === 'success'){
			this.profilePic = result.info.profilepic.imageBuffer;
			localStorage.setItem('loginData', JSON.stringify(result.info));
			this.previewPicModal.close();
		}
	}

	private onModalClosed(){
		if(this.localStream != null){
			//localStream.stop();
			let track = this.localStream.getTracks()[0];  // if only one media track
			track.stop();
		}
	}
}
