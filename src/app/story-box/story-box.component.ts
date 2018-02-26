import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'app/services/utility/utility.service';
import { ModalService } from '../modal/modal.service';
import { FeedService } from 'app/services/data/feed.service';
import { FriendsService } from 'app/services/data/friends.service';
import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Component({
  selector: 'app-story-box',
  templateUrl: './story-box.component.html',
  styleUrls: ['./story-box.component.css'],
  providers: [FeedService, FriendsService]
})
export class StoryBoxComponent implements OnInit {

	@ViewChild('storyBox') storyBox: ElementRef;
	@ViewChild('postedPicModal') postedPicModal;
	@ViewChild('musicInput') musicInput;
	@ViewChild('musicPlayer') musicPlayer: ElementRef;

	private profilePicWidth: number = 50;
	private loginData = undefined;
	private profilePic: string = '';
	private color: string = "#000"
	private isShowFontFamily: boolean = false;
	private isShowFontSize: boolean = false;
	private fontFamily:string = 'Open Sans, sans-serif';
	private fontSize: string = 11+'px';
	private isBoldBtnHighLight: boolean = false;
	private isULBtnHighLight: boolean = false;
	private isIBtnHighLight: boolean = false;
	private isEmotionsHighLight: boolean = false;
	private isAddPost : boolean = true;
	private isPostImage : boolean = true;
	private postTitle: string = '';
	private postDesc: string = '';
	private fontWeight: string = 'normal';
	private txtDeco: string = 'none';
	private fontStyle = 'normal'
	private isSmileyAdded: boolean = false;
	private storyContent:string = '';
	private imageUploadForm: any;
  	private imageGroup: any;
	private musicUploadForm: any;
  	private musicGroup: any;
  	private videoUploadForm: any;
  	private videoGroup: any;
  	private modalId = 'storyModal';
  	private encodedImage: any;
  	private files: any;
  	private userId: string = '';
  	private fullName: string = '';
  	private email: string = '';
  	private friendIdArr: Array<string> = [];
  	private feedItem: any;
  	private postFeedForm: any;
  	private fileType: string = '';
  	private postedMusicPath: string = ''
  	private uploadProgress: number = 0;
  	private isProgress: boolean = false;
  	private postId: string = '';


	constructor(private formBuilder: FormBuilder, private modalService: ModalService, private feedService: FeedService, private friendsService: FriendsService) {
		let loginData = JSON.parse(localStorage.getItem('loginData'));
      	this.userId = loginData.username;
      	this.email = loginData.username;
      	this.fullName = loginData.fullname;
      	this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.profilePic = this.loginData.profilepic.imageBuffer;

		this.imageUploadForm = this.formBuilder.group({
      		'file': ['']
    	});

    	this.imageGroup = new FormGroup({
        	file: new FormControl()
      	});

      	this.musicUploadForm = this.formBuilder.group({
      		'file': ['']
    	});

    	this.musicGroup = new FormGroup({
        	file: new FormControl()
      	});
      	this.videoUploadForm = this.formBuilder.group({
      		'file': ['']
    	});

    	this.videoGroup = new FormGroup({
        	file: new FormControl()
      	});
      	this.getAllConfirmedFriends();
	}

	ngOnInit() {

	}
	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.isShowFontFamily = false;
		this.isShowFontSize = false;
		this.isEmotionsHighLight = false;
	}
	private clickedInside($event: Event){
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
  	}
	private colorPickerChange(event){
		console.log(this.color);
	}
	private toggleFontFamily(event){
		this.isShowFontSize = false;
		this.isEmotionsHighLight = false;
		if(!this.isShowFontFamily){
			this.isShowFontFamily = true;
		}else{
			this.isShowFontFamily = false;
		}
	}

	private applyFontFamily(event, fontFamily){
		this.isShowFontFamily= false;
		this.fontFamily = fontFamily;
	}
	private toggleFontSize(event){
		this.isShowFontFamily = false;
		this.isEmotionsHighLight = false;
		if(!this.isShowFontSize){
			this.isShowFontSize = true;
		}else{
			this.isShowFontSize = false;
		}
	}

	private applyFontSize(event, fontSize){
		this.isShowFontSize= false;
		this.fontSize = fontSize.toString()+'px';
	}
	private applyBold(event){
		if(this.isBoldBtnHighLight){
			this.fontWeight = 'normal';
			this.isBoldBtnHighLight = false;
		}else{
			this.fontWeight = 'bold';
			this.isBoldBtnHighLight = true;
		}
	}

	private applyUnderline(event){
		if(this.isULBtnHighLight){
			this.txtDeco = 'none';
			this.isULBtnHighLight = false;
		}else{
			this.txtDeco = 'underline';
			this.isULBtnHighLight = true;
		}
	}

	private applyItalic(event){
		if(this.isIBtnHighLight){
			this.fontStyle = 'normal'
			this.isIBtnHighLight = false;
		}else{
			this.fontStyle = 'italic'
			this.isIBtnHighLight = true;
		}
	}

	private showEmotions(event){
		this.isShowFontFamily = false;
		this.isShowFontSize = false;
		if(this.isEmotionsHighLight){
			this.isEmotionsHighLight = false;
		}else{
			this.isEmotionsHighLight = true;
		}
	}

	private onStoryContentChange(event){
		if(this.storyBox.nativeElement.innerText.trim().length === 0){
			this.isSmileyAdded = false;
		}
		switch(event.keyCode) {
			case 8:
		        break;
			case 13:
				this.syncEmotion('');
		        break;
		    case 16:
		        break;
		    case 18:
		        break;
		    case 32:
		        break;
		    case 37:
		        break;
		    case 38:
		        break;
		    case 39:
		        break;
		    case 40:
		        break;
		    default:
		        
		}
	}

	private onStoryContentChanged(keyCode){
		//this.storyContentText = 

		/*if(keyCode === 32){
			let storyContents = this.storyBox.nativeElement.innerHTML;
			storyContents = UtilityService.setSmileys(storyContents);
			console.log('change'+storyContents);
			this.storyContent = storyContents;
			this.setEndOfContenteditable(this.storyBox.nativeElement);
		}*/
	}
	private setEndOfContenteditable(contentEditableElement)
	{
	    let range,selection;
	    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
	    {
	        range = document.createRange();//Create a range (a range is a like the selection but invisible)
	        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
	        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
	        selection = window.getSelection();//get the selection object (allows you to change selection)
	        selection.removeAllRanges();//remove any selections already made
	        selection.addRange(range);//make the range you have just created the visible selection
	    }
	    /*else if(document.selection)//IE 8 and lower
	    { 
	        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
	        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
	        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
	        range.select();//Select the range (make it the visible selection
	    }*/
	}

	private addEmotion(event, symbol){
		this.syncEmotion(symbol);
	}

	private syncEmotion(symbol){
		this.isSmileyAdded = true;
		let storyContents = this.storyBox.nativeElement.innerHTML + symbol;
		storyContents = UtilityService.setSmileys(storyContents);
		console.log('change'+storyContents);
		this.storyContent = storyContents;
		setTimeout(()=>{    //<<<---    using ()=> syntax
		      this.setEndOfContenteditable(this.storyBox.nativeElement);
		 },0.0001);
	}

	private openAppModal(){
  		let self = this;
  		self.modalService.open(self.modalId);
  	}
  	private editCurrentFeedItem(event){
  		let self = this;
  		self.postId = event.item._id;
  		self.fileType = event.item.type;
  		self.postTitle = event.item.title;
  		self.postDesc = event.item.description;

  		if(self.fileType === 'text'){
  			self.isAddPost = false;
  			self.color = event.item.colorInfo;
  			self.fontFamily = event.item.fontFamily;
  			self.fontSize = event.item.fontSize;
  			self.fontStyle = event.item.fontStyle;
  			self.txtDeco = event.item.textDecoration;
  			self.fontWeight = event.item.fontWeight;
  			self.storyContent = event.item.post;
        }
  		else if(self.fileType === 'image'){
  			self.isPostImage = false;
        	self.encodedImage = event.item.filePath;
        	self.openAppModal();
        }else{
        	self.postedMusicPath = event.item.filePath;
        	self.musicPlayer.nativeElement.load();
        	self.openAppModal();
        }
  		
  	}
	private fileChangeEvent(event, type){
		this.fileType = type;
		//if(this.fileType === 'image'){
			this.files = event.target.files[0];
	        //this.uploadCanvasPic();
	  		let self = this;
	      	if (event.target.files && event.target.files[0]) {
	        	let reader = new FileReader();
		        reader.onload = function (e : any) {
		            //$('#preview').attr('src', e.target.result);
		            if(type === 'image'){
		            	self.encodedImage = e.target.result;
		            }else{
		            	self.postedMusicPath = e.target.result;
		            	self.musicPlayer.nativeElement.load();
		            	uploadMusic();
		            }
		            
		            self.openAppModal();
		            
		        }

		    	reader.readAsDataURL(event.target.files[0]);
			}

		function uploadMusic() {
			let formData = new FormData();
			formData.append('uploadfile', self.files);
			formData.append('userid', self.userId);

			let xhr = new XMLHttpRequest();
			xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadMusicFeed', true);
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
				self.postedMusicPath = JSON.parse(xhr.responseText).musicPath;
				/*let file = xhr.responseText;
				$('div.progress div').css('width','0%');
				$('div.progress').hide();
				showMsg("alert alert-success", "File uploaded successfully!");
				$('#myFile').val('');*/
				/*if(self.isAudioAlbum){
					self.fetchAudioAlbumInfo();
				}else{
					self.fetchAlbumAudioInfo();	
				}*/
				
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
		//}
	    /*
	    let self = this;
	    let userId = this.userId;
	    let file: any;
	    if (event.target.files && event.target.files[0]) {
	      file = event.target.files[0];
	      uploadPhoto();
	    }
	    function uploadPhoto() {
	    	let formData = new FormData();
	    	formData.append('uploadfile', file);
	    	formData.append('userid', userId);
	    	if(!directUpload){
	        	formData.append('album', self.photosInfo.title);
	      	}else{
	        	formData.append('album', 'untitled');
	    }

	    let xhr = new XMLHttpRequest();
	    xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadPhotos', true);
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
			if(self.isPhotosAlbum){
			  self.fetchPhotosAlbumInfo();
			}else{
			  self.fetchAlbumPhotosInfo(); 
			}
		};

      	xhr.onreadystatechange = function(){
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
		return false;*/
    }

     



    private postStory(event){
    	this.syncEmotion('');
    	this.postItem(undefined, 'text', this.storyContent, '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);

    }
    private updateStory(event){
    	this.syncEmotion('');
    	this.postItem(this.postId, 'text', this.storyContent, '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);

    }


    private postImage(event){
    	this.postItem(undefined, 'image', '', this.encodedImage, this.postTitle, this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
    	this.postedPicModal.close();

    }
    
    private updateImage(event){
    	this.postItem(this.postId, 'image', '', this.encodedImage, this.postTitle, this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
    	this.postedPicModal.close();

    }
    private postMusic(event){
    	this.postItem(undefined, 'music', '', this.postedMusicPath, this.postTitle, this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
    	this.postedPicModal.close();
    }

    private postItem(postId, type, storyContent, filePath, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight){
    	let postObj = {'id': postId,
    		'username': this.userId,
	        'email': this.email,
	        'fullname': this.fullName,
	        'profilepic': this.profilePic,
	        'post' : storyContent,
			'type' : type,
			'title' : title,
			'description' : desc,
			'isReady' : true,
			'isNotified' : false,
			'coolArr' : [],
			'commentArr' : [],
			'filePath' : filePath,
			'colorInfo' : color,
			'fontFamily' : fontFamily,
			'fontSize' : fontSize,
			'fontStyle': fontStyle,
			'textDecoration' : txtDeco,
			'fontWeight' : fontWeight,
			'addWatcherArr' : []
     	};
          this.feedService.savePost(postObj).subscribe(data => this.afterPostSaved(data));
    }

    private afterPostSaved(result) {
    	this.isSmileyAdded = false;
    	this.storyContent = '';
    	this.postTitle = '';
    	this.postDesc = '';
    	this.isAddPost = true;
    	this.isPostImage = true;
    	if(result.status === 'failure'){
        	alert(result.message);
      	}else{
        	this.refreshFeed();
      	}
  	}

  	private getAllConfirmedFriends(){
  		let postObj = {'userid': this.userId}
  		this.friendsService.getAllConfirmedFriends(postObj).subscribe(data => this.afterGetAllConfirmedFriends(data));
  	}

    private afterGetAllConfirmedFriends(result) {
    	this.friendIdArr.push(this.userId);
    	for(let i in result){
    		if(this.userId !== result[i].friendid){
    			this.friendIdArr.push(result[i].friendid);
    		}
    		if(this.userId !== result[i].userid){
    			this.friendIdArr.push(result[i].userid);
    		}
    	}

    	this.refreshFeed();
  	}

  	private refreshFeed(){
  		let postObj = {'reqidarr': this.friendIdArr};
  		this.feedService.refreshFeed(postObj).subscribe(data => this.afterRefreshFeed(data));
  	}

  	private refreshFeedItem(event){
  		this.refreshFeed();
  	}

  	private afterRefreshFeed(result) {
  		console.log('>>>>'+result);
  		this.feedItem = result;
  	}
}
