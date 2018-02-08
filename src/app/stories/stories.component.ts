import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
	@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();

	private isMyProfile: boolean = false;
	private userId: string = '';
    private friendId: string = '';
    private isStories: boolean = true;
    private isHighLightStories: boolean = true;
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
				localStorage.setItem('currentRoute', 'stories/'+id);
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

}
