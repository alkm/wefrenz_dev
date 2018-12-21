import { Component, HostListener, OnInit, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router'; 
import 'rxjs/add/operator/filter';
import { FriendsService } from '../../app/services/data/friends.service';
import { NotificationService } from '../../app/services/data/notification.service';
import { SearchService } from '../../app/services/data/search.service';
import { ModalService } from '../modal/modal.service';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-private-nav',
  templateUrl: './private-nav.component.html',
  styleUrls: ['./private-nav.component.css'],
  providers: [SearchService, FriendsService, NotificationService]
})
export class PrivateNavComponent implements OnInit, AfterViewInit {

	private active: boolean = false;
	private isShowPreview: boolean = false;
	private innerWidth: number = 0;
	private modalId = 'notificationModal';
	private searchResultList = undefined;
	private friendRequestPendingList = undefined;
	private notificationList = undefined;
	private reqArr = undefined;
	private notArr = undefined;
	private isBorder: boolean = false;
	private isFriendReuestBorder: boolean = false;
	private isNotificationBorder: boolean = false;
	private navRef: any;
	private searchValue: string = '';
	private friendRequestCount: number = 0;
	private notificationCount: number = 0;
	private isNotificationCountDisplay: boolean = false;
	private isFriendRequestPendingDisplay: boolean = false;
	private isNotificationDisplay: boolean = false;
	private timerSubscription: any;
	private userId: string = '';
	private intervalId: any;
	private isPreviewReady = false;
	private notificationInfo = {};
	private previewInfo = {};

	@Output() onFriendConfirmedFromNotification: EventEmitter<any> = new EventEmitter();
	@ViewChild('appPreview') appPreview: PreviewComponent;

	constructor(private router: Router, private searchService: SearchService, private friendsService: FriendsService, private notificationService: NotificationService, private modalService: ModalService) { 
		this.userId = localStorage.getItem('currentUser');
		let self = this;
		this.router.events.filter(e => e instanceof   NavigationStart).pairwise().subscribe((e) => {
			clearInterval(self.intervalId);
		}); 
	}
	
	ngOnInit() {
  		this.checkInnerWidth();
  		//this.instance.removeSearchResult.subscribe((data) => this.removeSearchResult(data));
  	}

  	ngAfterViewInit(){
  		this.pullNotifications();
		this.subscribeToNotifications();
  	}

  	removeSearchResult(event){
  		alert('removeSearchResult plz');
  	}
  	private logOut(){
  		this.triggerLoggedInCheck('onAppLoggedOut', {event: 'onAppLoggedOut', message: 'logged out'});
		localStorage.removeItem('currentUser');
		localStorage.removeItem('loginData');
		this.router.navigate(['public']);
	}
	private triggerLoggedInCheck(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, evtObj);
    	window.dispatchEvent(evt);
    }

  	private onResize(event) {
		this.checkInnerWidth();
	}
	
	private checkInnerWidth(){
		this.innerWidth = window.innerWidth;
		if(this.innerWidth < 768){
			this.active = true;
		}else{
			this.active = false;
		}
	}

	private toggleNav(event) {
		if(!this.active){
	    	this.active = true;
	  	}else{
	  		this.active = false;
	  	}
	}

	private querySearch(searchQuery){
		let postObj = {'searchparam': searchQuery};
        this.searchService.querySearch(postObj).subscribe(data => this.afterSearch(data));
	}

	private afterSearch(data){
		this.searchResultList = data;
		if(this.searchResultList.length > 0){
			this.isBorder = true;
		}else{
			this.isBorder = false;	
		}
	}

	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.searchResultList = [];
		this.friendRequestPendingList = [];
		//this.notificationList = [];
		this.isNotificationDisplay = false;
		this.isFriendReuestBorder = false;
	}

	private clickedInside($event: Event){
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
	    this.searchResultList = [];
	    //this.friendRequestPendingList = [];
  	}

  	private requestCountClick(event){
  		event.preventDefault();
  		event.stopPropagation();
  		this.isFriendRequestPendingDisplay = false;
  		this.friendRequestCount = 0;
  		let postObj = {'reqarr': this.reqArr};
  		this.friendsService.getRequestDetails(postObj).subscribe(data => this.afterGetRequestDetails(data));
  	}

  	private getAllFriendReq(event): void{
		let postObj = {'userid': this.userId};
		this.friendsService.getAllFriendReq(postObj).subscribe(data => this.afterGetAllFriendReq(data));
	}

	private afterGetAllFriendReq(data){
		this.reqArr = [];
		if(data.length > 0){
			for(let obj in data){
				this.reqArr.push(data[obj].requester);
				this.isFriendReuestBorder = true;
			}
			let postObj = {'reqarr': this.reqArr};
			this.friendsService.getRequestDetails(postObj).subscribe(data => this.afterGetRequestDetails(data));
		}
	}

  	private notificationCountClick(event){
  		event.preventDefault();
  		event.stopPropagation();
  		this.isNotificationCountDisplay = false;
  		this.isNotificationDisplay = true;
  		let postObj = {'notarr': this.notArr};
  		this.notificationService.updateNotificationDisplay(postObj).subscribe(data => this.afterUpdateNotificationDisplay(data));
  	}

  	private afterUpdateNotificationDisplay(data){
  		if(data.length > 0){
  			this.isNotificationBorder = true;
  			this.friendRequestPendingList = data;
  		}else{
  			this.isNotificationBorder = false;
  		}
  	}

  	private afterGetRequestDetails(data){
  		if(data.length > 0){
  			this.isFriendReuestBorder = true;
  			this.friendRequestPendingList = data;
  		}else{
  			this.isFriendReuestBorder = false;
  		}
  	}

  	private subscribeToNotifications(): void {
    	this.intervalId = setInterval(() => { this.pullNotifications(); }, 1000 * 10);
	}

 	//Pulling notifications in every 5 seconds
	private pullNotifications(): void {
		let postObj = {'userid': this.userId};
		this.friendsService.getFriendReq(postObj).subscribe(data => this.afterGetFriendReq(data));
		this.notificationService.checkNotification(postObj).subscribe(data => this.afterCheckNotification(data));
	}

	private fetchAllNotifications(event): void{
		let postObj = {'userid': this.userId};
		this.notificationService.fetchAllNotifications(postObj).subscribe(data => this.afterFetchAllNotifications(data));	
	}

	//Keeping the requester userid in array to query from userinfo collection
	private afterGetFriendReq(data){
		this.friendRequestCount = data.length;
		this.reqArr = [];
		if(this.friendRequestCount > 0){
			this.isFriendRequestPendingDisplay = true;
			for(let obj in data){
				this.reqArr.push(data[obj].requester);
			}
		}else{
			this.isFriendRequestPendingDisplay = false;;
		}
	}

	private afterCheckNotification(data){
		this.notificationCount = data.info.length;
		this.notArr = [];
		if(this.notificationCount > 0){
			this.isNotificationCountDisplay = true;
			this.notificationList = data.info;
			for(let obj in data.info){
				this.notArr.push(data.info[obj].userid);
			}
		}else{
			this.isNotificationCountDisplay = false;;
		}
	}

	private afterFetchAllNotifications(data){
		//this.notificationCount = data.info.length;
		let notCount = data.info.length; 
		this.notArr = [];
		if(notCount > 0){
			this.notificationList = data.info;
			this.isNotificationDisplay = true;
		}
	}

 	//Removing the confirmed friend from the list
	private onFriendConfirmed(event){
		for(let i in this.friendRequestPendingList){
			if(event.data.requester === this.friendRequestPendingList[i].username){
				this.friendRequestPendingList.splice(i, 1);
				//This is will be listened at coverpic component to change the friend's controls
				this.onFriendConfirmedFromNotification.emit({data: event.data});
				if(this.friendRequestPendingList.length === 0){
					this.isFriendReuestBorder = false;
					this.isFriendRequestPendingDisplay = false;
				}
			}
		}
	}

	private previewWindowReady(event){
		if(!this.isPreviewReady){
			this.playVideo(this.notificationInfo);
			this.isPreviewReady = true;
		}
	}
	private previewClicked(event){
		this.notificationInfo = event.data;
		this.isShowPreview = true;
		this.openAppModal();
		if(this.isPreviewReady){
			this.playVideo(this.notificationInfo);
		}
  		
	}

	private openAppModal(modalType = null){
  		let self = this;
  		self.modalService.open(self.modalId);
  	}

  	private onModalClosed(event){
  		this.appPreview.previewModalClosed();
  		let video = <HTMLVideoElement> document.getElementById('videoPreview');
  		video.pause();
  		video.src = '';
  	}

  	private playVideo(data){
  		let video = <HTMLVideoElement> document.getElementById('videoPreview');
  		//this.previewMP4VideoPath = data.filepath;
  		//this.previewPosterPath = data.notificationpic;
  		video.src = data.filepath;
  		video.poster = data.notificationpic;
  	}

  	private videoDeleted(event){
  		let self = this;
  		self.modalService.close(self.modalId);
  	}

}
