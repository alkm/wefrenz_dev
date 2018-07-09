import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from '../modal/modal.service';
import { UploadService } from '../services/data/upload.service';
import { AppSettingsService } from 'app/services/settings/app-settings.service';
import { ConfigurationService } from 'app/services/data/configuration.service';
import { FriendsService } from 'app/services/data/friends.service';
import { UtilityService } from 'app/services/utility/utility.service';

@Component({
  selector: 'app-coverpic',
  templateUrl: './coverpic.component.html',
  styleUrls: ['./coverpic.component.css'],
  providers: [ UploadService, ConfigurationService, FriendsService ]
})
export class CoverpicComponent implements OnInit, AfterViewInit {

	@ViewChild('coverPic') coverPic: ElementRef;
	@ViewChild('coverPicFileInput') coverPicFileInput: ElementRef;
	@ViewChild('coverPicModal') coverPicModal;
	@ViewChild('fileInput') fileInput;

	@Input() sharedList: any;
	@Output() onFriendConfirmed:EventEmitter<any> = new EventEmitter();

	private modalId = 'coverPicModal';
    private encodedImage: any;
	private canvasArea: any;
	private context: CanvasRenderingContext2D;
	private bgSize: string = 'cover'; 
	private startX: number;
    private startY: number;
	private initialX: number;
	private initialY: number;
	private posX: number = 0;
	private posY: number = 0;
	private differenceX: number;
	private differenceY: number;
	private scalableHeight: number;
	private coverPicHeight: number = 300;
	private coverPicWidth: number = 756;
	private isMyProfile: string = 'false';
	private isEditCoverPic = false;
	private isSaveCoverPic = false;
	private isUploadCoverPic = false;
	private isAddFriend = false;
	private isRequestPending = false;
	private isRequestConfirmed = false;
	private isConfirmFriend: boolean = false;
	private mouseCursor: string = 'default';
	private coverPicUploadForm: any;
	private coverPicGroup: any;
	private files: any;
	
	private self: any;

	private coverPicURL: string = '';
	private userId: string = '';
	private friendId: string = ''

	//private scene: Scene;

    private mouseDown : boolean = false;
    

    @HostListener('window:mouseup', ['$event'])
	onMouseup(event){
		this.mouseDown = false;	
	}

    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
        if(this.mouseDown) {
        	if(this.mouseCursor === 'move'){   
				this.differenceX = this.startX - event.pageX;
				this.differenceY = this.startY - event.pageY;
				this.posX = 0;
				var diff = this.initialY - this.differenceY;
				if(diff < 0 ){
					this.posY = diff;
				}else{
					this.posY = 0;
				}
				console.log(this.posY);
				let scalableDiff = this.coverPicHeight - this.scalableHeight;
				if(this.posY <= scalableDiff){
					this.posY = scalableDiff;
				}
				let styles = getComputedStyle(this.coverPic.nativeElement);
        	} 
        }
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        this.mouseDown = true;
    	this.startX = event.pageX;  
		this.startY = event.pageY;
		this.initialX = this.posX;
		this.initialY = this.posY;
    }

	constructor(private formBuilder: FormBuilder, private elementRef: ElementRef, private route: ActivatedRoute, private modalService: ModalService, private uploadService: UploadService, private configurationService: ConfigurationService, private friendsService: FriendsService) {
        let self = this;
        this.route.params.subscribe(val => {
			this.isMyProfile = localStorage.getItem('isMyProfile');
			if(this.isMyProfile === 'true'){
				//this.mouseCursor = 'move';
			}else{
				//this.mouseCursor = 'default';
				//let postObj = {'userid': (this.posX+'x'+this.posY, )};
				//this.configurationService.saveCoverPicPos(postObj).subscribe(data => this.afterCoverPicPosSaved(data));
			}
			
		});

		this.coverPicUploadForm = this.formBuilder.group({
		  'file': ['']
		});

		this.coverPicGroup = new FormGroup({
	       file: new FormControl()
	    });

	    //this.coverPicURL = AppSettingsService.API_ENDPOINT("local")+'/'+JSON.parse(localStorage.getItem('loginData')).wallpicpath;

	    this.self = this;
	    let loginData = JSON.parse(localStorage.getItem('loginData'));
	    this.userId = loginData.username;

	}

	ngOnInit(){

	}
	ngAfterViewInit(){
		//this.drawImage(0, 0);
		
  	}

  	private updateCoverPicSettings(coverPicSettings){
  		let self = this;
		let actualImage = new Image();
		let styles = getComputedStyle(this.coverPic.nativeElement);
		actualImage.src = this.coverPicURL.replace(/"/g,"").replace(/url\(|\)$/ig, "");

		actualImage.onload = function() {
		    console.log(actualImage.width+','+actualImage.height);
		    self.scalableHeight = (self.coverPicWidth/actualImage.width)*actualImage.height;
		}

		this.posX = UtilityService.getPicPosition(coverPicSettings.wallpicpos).position.x;
		this.posY = UtilityService.getPicPosition(coverPicSettings.wallpicpos).position.y;
		
  	}


	private canvasMouseDown(){
		//this.mousePressed = true;
	}

	private canvasMouseUp(){
		//this.mousePressed = false;
		//this.dragging = false;
	}

	private triggerFalseFileClick() {
		this.coverPicFileInput.nativeElement.click()
	    //el.click();
	}

	private editCoverPicClick(event){
		if(!this.isEditCoverPic){
  			this.isEditCoverPic = true;
  		}else{
  			this.isEditCoverPic = false;
  		}
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.isEditCoverPic = false;
		//this.searchValue = '';

	}
	private clickedInside($event: Event){
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
  	}

  	private moveClick(event){
  		this.mouseCursor = 'move';
  		this.isEditCoverPic = false;
  		this.isSaveCoverPic = true;
  	}
  	private changeClick(){
  		this.mouseCursor = 'default';
  		this.isEditCoverPic = false;
  		//let element: HTMLElement = document.getElementsByClassName('file-input')[0] as HTMLElement;
		//element.click();
  		//fileInput.click();

  	}
  	private selectClick(event){
  		this.mouseCursor = 'default';
  		this.isEditCoverPic = false;
  		this.isSaveCoverPic = true;
  	}
  	private defaultClick(event){
  		this.mouseCursor = 'default';
  		this.isEditCoverPic = false;
  		this.isSaveCoverPic = true;
  	}

  	private cancel(event){
  		this.mouseCursor = 'default';
  		this.isSaveCoverPic = false;
  	}
  	private save(){
  		if(this.isUploadCoverPic){
  			this.uploadCoverPic();
  			this.mouseCursor = 'default';
  		}
  		if(this.mouseCursor == 'move'){
  			this.saveCoverPicPos();
  			this.mouseCursor = 'default';
  		}  		
  		this.isUploadCoverPic = false;
  		this.isSaveCoverPic = false;
  	}

  	private openAppModal(){
  		var self = this;
  		self.modalService.open(self.modalId);
  	}
  	private ok(){
  		this.coverPicURL = this.encodedImage;
  		this.bgSize = 'cover';
  		this.mouseCursor = 'move';
  		this.isEditCoverPic = false;
  		this.isSaveCoverPic = true;
  		this.isUploadCoverPic = true;
  		//this.coverPicModal.close();
  		this.modalService.close(this.modalId);
  	}



  	private fileChangeEvent(event){
  		this.files = event.target.files[0];
        //this.uploadCanvasPic();
  		var self = this;
      	if (event.target.files && event.target.files[0]) {
        	let reader = new FileReader();
	        reader.onload = function (e : any) {
	            //$('#preview').attr('src', e.target.result);
	            self.encodedImage = e.target.result;
	            self.openAppModal();
	            
	        }

	        reader.readAsDataURL(event.target.files[0]);
	    }

	    //var files = fileInput.srcElement.files;
	    //console.log(files);
	    //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
	    //  console.log('sent');
	    //});
	}

	private saveCoverPicPos(){
		let postObj = {'coverpicpos': (this.posX+'x'+this.posY), 'userid': this.userId};
		this.configurationService.saveCoverPicPos(postObj).subscribe(data => this.afterCoverPicPosSaved(data));
	}
	private afterCoverPicPosSaved(result){
		alert(result.message);
	}
	//Confirming the friend
	private confirm(event){
		let postObj = {'userid': this.userId, 'friendid': this.friendId};
		this.friendsService.confirmFriendReq(postObj).subscribe(data => this.afterConfirmFriendReq(data));
	}

	private afterConfirmFriendReq(data){
		if(data.status === 'confirmed'){
			this.isRequestConfirmed = true
			this.isConfirmFriend = false;
			this.onFriendConfirmed.emit({data: data});
			//Updating controls after friend is confirmed
			this.updateFriendsControlsSettings(data);
		}
	}

	private updateFriendsControlsSettings(data){
		switch(data.status) {
		    case '!friend':
		        this.isAddFriend = true;
		        this.isRequestPending = false;
		        this.isRequestConfirmed = false
		        this.isConfirmFriend = false;
		        break;
		    case 'displayed':
		    	if(data.agent === 'responder'){
		    		this.isConfirmFriend = true;
		    		this.isRequestPending = false;
		    	}else if(data.agent === 'requester'){
		    		this.isConfirmFriend = false;
		    		this.isRequestPending = true;
		    	}
		        this.isAddFriend = false;
		        this.isRequestConfirmed = false
		        break;
		    case 'pending':
				if(data.agent === 'responder'){
					this.isConfirmFriend = true;
		    		this.isRequestPending = false;
				}else if(data.agent === 'requester'){
		    		this.isConfirmFriend = false;
		    		this.isRequestPending = true;
		    	}
		        this.isAddFriend = false;
		        this.isRequestConfirmed = false;
		        break;
		    case 'confirmed':
		    	this.updateConfirmedControls();
		        break;
		    default:
		        
		}
	}

	private updateConfirmedControls(){
		this.isRequestConfirmed = true
		this.isAddFriend = false;
		this.isRequestPending = false;
		this.isConfirmFriend = false;
	}

	private addFriend(){
		let postObj = {'userid': this.userId, 'friendid': this.friendId};
		this.friendsService.setFriendInfo(postObj).subscribe(data => this.afterSetFriendInfo(data));
	}

	private afterSetFriendInfo(result){
		if(result.status === "sent"){
			this.isAddFriend = false;
			this.isRequestPending = true;
			this.isRequestConfirmed = false;
		}
	}

	private uploadCoverPic() {
		//FILL FormData WITH FILE DETAILS.
		let formData = new FormData();
		let file = this.files;
		formData.append('uploadfile', file);
		let coverPicPos = this.posX+'x'+this.posY;
		formData.append('coverpicpos', coverPicPos);
		formData.append('userid', this.userId)

		let xhr = new XMLHttpRequest();
		xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadCoverPic', true);
		xhr.upload.onprogress = function(e) {
			if (e.lengthComputable) {
				let percentage = (e.loaded / e.total) * 100;
				console.log(percentage);
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
	    	let loginData = JSON.parse(localStorage.getItem('loginData'));
	    	loginData.wallpicpath = JSON.parse(responseText).wallpicpath;
	    	localStorage.setItem('loginData', JSON.stringify(loginData));
	    }

		xhr.send(formData);
		return false;
	}

	// UPDATE PROGRESS BAR.
    private updateProgress(e) {
        if (e.lengthComputable) {
            document.getElementById('pro').setAttribute('value', e.loaded);
            document.getElementById('pro').setAttribute('max', e.total);
        }
    }

    // CONFIRMATION.
    private transferComplete(e) {
        alert("Files uploaded successfully.");
    }

}

