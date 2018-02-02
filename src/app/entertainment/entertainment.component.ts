import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

	@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();

	private isMyProfile: boolean = false;
	private userId: string = '';
    private friendId: string = '';
    private isVideo: boolean = true;
    private isMusic: boolean = false;
    private isPhotos: boolean = false;
    private isHighLightVideos: boolean = true;
    private isHighLightMusic: boolean = false;
    private isHighLightPhotos: boolean = false;

  	constructor(private route: ActivatedRoute, private router: Router) { 
  		route.params.subscribe(val => {
			let currentUser = localStorage.getItem('currentUser');
			let id = this.route.snapshot.paramMap.get('id');

			if (!currentUser) {
				this.triggerLoggedInCheck('onAppLoggedOut', {event: 'onAppLoggedOut', message: 'logged out'});
				this.onAppLoggedOut.emit('logged Out');
				this.router.navigate(['public']);	
				return;
			}else{
				this.triggerLoggedInCheck('onAppLoggedIn', {event: 'onAppLoggedIn', message: 'logged in'});
				this.onAppLoggedIn.emit('logged In');
				localStorage.setItem('currentRoute', 'entertainment/'+id);
			}

			
			if(currentUser === id){
				this.isMyProfile = true;
				localStorage.setItem("isMyProfile", 'true');
			}else{
				this.isMyProfile = false;	
				localStorage.setItem("isMyProfile", 'false');
				let postObj = {'userid': currentUser, 'friendid': id};
				this.userId = currentUser;
				this.friendId = id;
				//this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
			}
			
			//this.routeSwitch.emit(this.isMyProfile);
			//this.getProfileInfo(id);
		});
  	}

	ngOnInit() {
	}

	private triggerLoggedInCheck(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, evtObj);
    	window.dispatchEvent(evt);
    }

    private switchVideo(event){
    	this.isVideo = true;
    	this.isPhotos = false;
    	this.isMusic = false;
    	this.isHighLightVideos = true;
    	this.isHighLightMusic = false;
    	this.isHighLightPhotos = false;
    }
    private switchMusic(event){
    	this.isVideo = false;
    	this.isPhotos = false;
    	this.isMusic = true;
    	this.isHighLightVideos = false;
    	this.isHighLightPhotos = false;
    	this.isHighLightMusic = true;
    }
    private switchPhotos(event){
    	this.isVideo = false;
    	this.isMusic = false;
    	this.isPhotos = true;
    	this.isHighLightVideos = false;
    	this.isHighLightPhotos = true;
    	this.isHighLightMusic = false;
    }

}
