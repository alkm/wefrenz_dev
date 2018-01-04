import { Component, ViewChild, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { UtilityService } from 'app/services/utility/utility.service';
import { ProfileService } from 'app/services/data/profile.service';
import { AppSettingsService } from 'app/services/settings/app-settings.service';
import { FriendsService } from 'app/services/data/friends.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService, FriendsService]
})

export class ProfileComponent implements OnInit {
	@ViewChild('appCoverPic') appCoverPic;
	@Output() routeSwitch: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();

	private profilePic: string = '';
	private profilePicHeight: string = '';
	private profilePicWidth: string= '';
	private fullName: string;
	private isMyProfile: boolean = false;
    private sharedList: any;
    private userId: string = '';
    private friendId: string = '';

    @HostListener('window:popstate', ['$event'])
	  onPopState(event) {
	    localStorage.removeItem('currentRoute');
	  }

	constructor( private route: ActivatedRoute, private router: Router, private profileService: ProfileService, private friendsService: FriendsService ) { 
		route.params.subscribe(val => {
			let currentUser = localStorage.getItem('currentUser');
			let id = this.route.snapshot.paramMap.get('id');
			let obj = {'userid': currentUser, 'friendid': id};
			this.sharedList = obj;

			if (!currentUser) {
				this.triggerLoggedInCheck('onAppLoggedOut', {event: 'onAppLoggedOut', message: 'logged out'});
				this.onAppLoggedOut.emit('logged Out');
				this.router.navigate(['public']);	
				return;
			}else{
				this.triggerLoggedInCheck('onAppLoggedIn', {event: 'onAppLoggedIn', message: 'logged in'});
				this.onAppLoggedIn.emit('logged In');
				localStorage.setItem('currentRoute', 'profile/'+id);
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
				this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
			}
			
			//this.routeSwitch.emit(this.isMyProfile);
			this.getProfileInfo(id);
		});
	}

	ngOnInit() {
		
	}
	private triggerLoggedInCheck(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, evtObj);
    	window.dispatchEvent(evt);
    }

	private afterFriendInfo(result){
		this.appCoverPic.updateFriendsControlsSettings(result);
	}

	private getProfileInfo(profileId){
		let postObj = JSON.stringify({profileid: profileId});
        this.profileService.profileInfo(postObj).subscribe(data => this.afterProfileInfo(data));
	}
	private afterProfileInfo(result) {
		if(this.isMyProfile){
			this.appCoverPic.isAddFriend = false;
			this.appCoverPic.isRequestPending = false;
			this.appCoverPic.isRequestConfirmed = false;
			this.appCoverPic.isMyProfile = 'true';
		}else{
			this.appCoverPic.userId = this.userId;
			this.appCoverPic.friendId = this.friendId;
		}
		if(result.status === 'failure'){
			alert('Error fetching profile info');
		}else{
			this.profilePic = result.profilepic.imageBuffer;
			this.appCoverPic.coverPicURL = AppSettingsService.API_ENDPOINT("local")+'/'+result.wallpicpath;
			this.appCoverPic.updateCoverPicSettings(result);
			//this.profilePicWidth = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.width + 'px';
		//this.profilePicHeight = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.height + 'px';
		this.fullName = result.fullname;
		}
  }

  	private onFriendConfirmedFromNotification(event){
		if(event.data.requester === this.friendId){
			this.appCoverPic.updateConfirmedControls();
		}

	}

}
