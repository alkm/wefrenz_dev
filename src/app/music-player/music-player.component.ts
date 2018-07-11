import { Component, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../app/services/validators/validation.service';
import { AppSettingsService } from '../../app/services/settings/app-settings.service';
import { AudioService } from '../../app/services/data/audio.service';
import { MusicListComponent } from '../music-list/music-list.component';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
  providers: [AudioService]
})
export class MusicPlayerComponent implements OnInit {
	
	@ViewChild('audioPlayer') audioPlayer: ElementRef;
	@ViewChild('musicList', {read: ViewContainerRef}) musicList: ViewContainerRef;

	private files: any;
	private userId: string = '';
	private audioUploadForm: any;
	private audioGroup: any;
	private uploadProgress: number = 0;
	private isProgress: boolean = false;
	private albumForm : any;
	private audioAlbumList: any;
	private audioList: any;
	private albumTitle = '';
	private albumDesc = '';
	private isCreateAlbum: boolean = false;
	private isAddAlbum: boolean = false;
	private isUpdateAlbum: boolean = false;
	private isAudioAlbum: boolean = true;
	private isAlbumAudio: boolean = false;
	private albumInfo : any;
	private audioInfo: any;
	private mp3AudioPath = '';
	private posterPath = 'https://media.w3.org/2010/05/sintel/poster.png';
	private musicListRef: any;
	private musicSource: string[] = [];
	private musicListComponent: any;

	constructor(private formBuilder: FormBuilder, private audioService: AudioService, private componentFactoryResolver: ComponentFactoryResolver) { 
		let loginData = JSON.parse(localStorage.getItem('loginData'));
	    this.userId = loginData.username;

	    this.audioUploadForm = this.formBuilder.group({
		  'file': ['']
		});

		this.audioGroup = new FormGroup({
	       file: new FormControl()
	    });

	    this.albumForm = this.formBuilder.group({
	      'albumTitle': ['', [Validators.required, ValidationService.blankDataValidator]],
	      'albumDesc': ['', [Validators.required, ValidationService.blankDataValidator]]
	    });

	    this.fetchAudioAlbumInfo();
  		
  	}

	ngOnInit() {
		this.triggerWindowEvent('setSpectrum', {'event': 'setSpectrum', 'msgObj': {}});
	}

	private fileChangeEvent(event, directUpload){
		let self = this;
		let userId = this.userId;
		let file: any;
		if (event.target.files && event.target.files[0]) {
			file = event.target.files[0];
			uploadAudio();
		}
		function uploadAudio() {
			let formData = new FormData();
			formData.append('uploadfile', file);
			formData.append('userid', userId);
			if(!directUpload){
				formData.append('album', self.audioInfo.title);
			}else{
				formData.append('album', 'untitled');
			}

			let xhr = new XMLHttpRequest();
			xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadAudio', true);
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
				if(self.isAudioAlbum){
					self.fetchAudioAlbumInfo();
				}else{
					self.fetchAlbumAudioInfo();	
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
	        this.audioService.createAudioAlbum(postObj).subscribe(data => this.afterAlbumCreated(data));
	    }
	}

	private afterAlbumCreated(result) {
      if(result.status === 'failure'){
      	alert(result.message);
      }else{
      	this.cancelAlbum(null);
      	//alert(result.message);
      	this.fetchAudioAlbumInfo();

      }
  	}

	 private updateAlbumInfo(event){
	    if (this.albumForm.dirty && this.albumForm.valid) {
	     // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
	      let postObj = {'id': this.albumInfo._id,
	      	'username': this.userId,
	      	'title': this.albumForm.value.albumTitle,
	        'desc': this.albumForm.value.albumDesc};
	        this.audioService.updateAudioAlbum(postObj).subscribe(data => this.afterAlbumUpdated(data));
	    }
	}

	private afterAlbumUpdated(result) {
    	if(result.status === 'failure'){
      		alert(result.message);
      	}else{
      		this.cancelAlbum(null);
      		//alert(result.message);
      		this.fetchAudioAlbumInfo();
      	}
  	}

	private createAudioAlbum(event){
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

	private fetchAudioAlbumInfo(){
		let postObj = {'username': this.userId};
	    this.audioService.fetchAudioAlbumInfo(postObj).subscribe(data => this.afterAudioAbumInfo(data));
	}

	private fetchAlbumAudioInfo(){
		let postObj = {'username': this.userId, 'album': this.albumTitle};
	    this.audioService.fetchAlbumAudioInfo(postObj).subscribe(data => this.afterAbumAudioInfo(data));
	}

	private afterAudioAbumInfo(result){
		this.audioAlbumList = result;
		if(result.length > 0){
			this.musicSource = [];
			//for(var i in this.audioAlbumList[0].audiosList){
				this.musicSource = this.audioAlbumList[0].audiosList;
			//}
			this.createMusicList(this.musicSource);
			this.playAudio(this.audioAlbumList[0].audiosList[0], -1); 	
		}
	}
	private afterAbumAudioInfo(result){
		this.audioList = result[0].audiosList;
	}

	//Need to activate/deactivate edit btn later based on changes in title field
	private editAudioAlbum(event){
		this.albumInfo = event.data;
  		this.isCreateAlbum = true;
  		this.isAddAlbum = false;
		this.isUpdateAlbum = true;
  		this.albumTitle = this.albumInfo.title;
  		this.albumDesc = this.albumInfo.description;

  	}
  	//Diplaying the list of audios under a particular audio album
  	private showAudioList(event){
  		this.audioInfo = event.data;
  		this.isAudioAlbum = false;
  		this.isAlbumAudio = true;
  		this.audioList = this.audioInfo.audiosList;
  		this.albumTitle = this.audioInfo.title;
  		this.musicSource = [];
		//for(var i in this.audioList){
			this.musicSource= this.audioList;
		//}
		this.createMusicList(this.musicSource);
  		//this.fetchAlbumAudioInfo();
		this.playAudio(this.audioList[0], -1); 		

  	}

  	private goToMyAlbum(event){
  		this.isAudioAlbum = true;
  		this.isAlbumAudio = false;
  		this.fetchAudioAlbumInfo();
  	}

  	private pauseAudio(){
  		let playPromise = this.audioPlayer.nativeElement.play();
		if (playPromise !== undefined) {
			playPromise.then(_ => {
			  // Automatic playback started!
			  // Show playing UI.
			  // We can now safely pause video...
			  let isPlaying = this.audioPlayer.nativeElement.currentTime > 0 && !this.audioPlayer.nativeElement.paused && !this.audioPlayer.nativeElement.ended 
    			&& this.audioPlayer.nativeElement.readyState > 2;
				if (isPlaying) {
				//this.audioPlayer.nativeElement.pause();
					this.audioPlayer.nativeElement.pause();
				}
			})
			.catch(error => {
			  // Auto-play was prevented
			  // Show paused UI.
			});
		}
  	}
  	private playAudio(data, indx){
  		console.log(data);
  		this.posterPath = data.poster;
		this.pauseAudio();
			
		this.mp3AudioPath = data.actualAudio;
		try{
			this.musicListRef.instance.actualAudio = this.mp3AudioPath;
			this.musicListRef.instance.itemCount = indx;
			if(indx === -1){
				this.musicListRef.instance.itemCount = 0;
			}
			
			if(indx !== -1){
				//this.smoothItemScroll(this.mp3AudioPath);
				this.musicListRef.instance.smoothItemScroll();
			}
			
			this.audioPlayer.nativeElement.load();
			this.audioPlayer.nativeElement.play();			
		}catch(err){
			console.log(err);
		}

  		//this.audioPlayer.nativeElement.play();
  		
  	}

  	/*private smoothItemScroll(itemName){
  		let element = document.getElementById(itemName);
		element.scrollIntoView({behavior:"smooth"});
  	}*/

  	private createMusicList(musicSource){
    	if(this.musicListRef){
    		this.musicListRef.instance.playMusic.unsubscribe((data) => this.playMusic(data));
    		this.musicListRef.instance.pauseMusic.unsubscribe((data) => this.pauseMusic(data));
    		this.musicListRef.instance.resumeMusic.unsubscribe((data) => this.resumeMusic(data));
    		//this.audioPlayer.nativeElement.removeEventListener("ended", this.playNextItem());
    		this.musicListRef.instance.replayMusic.unsubscribe((data) => this.replayMusic(data));
    		this.musicListRef.instance.removeEventListeners();
    		this.musicListRef.instance.musicSource = [];
    		this.musicListRef.instance.actualAudio = '';
      		this.musicListRef.destroy();
    	}
    	this.musicListComponent = this.componentFactoryResolver.resolveComponentFactory(MusicListComponent);
    	this.musicListRef = this.musicList.createComponent(this.musicListComponent);
    	this.musicListRef.instance.musicSource = musicSource;
    	this.musicListRef.instance.actualAudio = musicSource[0].actualAudio;
    	this.musicListRef.instance.playMusic.subscribe((data) => this.playMusic(data));
    	this.musicListRef.instance.pauseMusic.subscribe((data) => this.pauseMusic(data));
    	this.musicListRef.instance.resumeMusic.subscribe((data) => this.resumeMusic(data));
    	this.musicListRef.instance.replayMusic.subscribe((data) => this.replayMusic(data));
    	//this.audioPlayer.nativeElement.addEventListener("ended", this.playNextItem());

  	}

  	private playNextItem(){
  		alert('audio ended');
  	}

  	private replayMusic(data){
  		this.audioPlayer.nativeElement.currentTime = 0;
  		//this.audioPlayer.nativeElement.play();	
  	}

  	private playMusic(data){
		this.pauseAudio();
		this.mp3AudioPath = data.actualAudio;
		try{
			this.audioPlayer.nativeElement.load();
			this.audioPlayer.nativeElement.play();			
		}catch(err){
			console.log(err);
		}
  	}

  	private pauseMusic(data){
		this.pauseAudio();
  	}
  	private resumeMusic(data){
  		this.audioPlayer.nativeElement.play();
  	}

	private triggerWindowEvent(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, {'detail': evtObj});
    	window.dispatchEvent(evt);
    }

}
