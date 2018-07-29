import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { UtilityService } from '../../app/services/utility/utility.service';
import { FriendsService } from '../../app/services/data/friends.service';

@Component({
  selector: 'app-friend-request-pending-list',
  templateUrl: './friend-request-pending-list.component.html',
  styleUrls: ['./friend-request-pending-list.component.css']
})
export class FriendRequestPendingListComponent implements OnInit {

	@Input() item;
	@Output() onFriendConfirmed:EventEmitter<any> = new EventEmitter();

	private profilePic: string;
	private profilePicWidth: string;
	private profilePicHeight: string;
	private fullName: string;
	private email: string;
	private userId: string;
	private friendId: string;
	
	constructor(private friendsService: FriendsService) { }

	ngOnInit() {
		this.profilePic = this.item.profilepic.imageBuffer;
		this.fullName = this.item.fullname;
		this.friendId = this.item.username;
		this.userId = localStorage.getItem('currentUser');
		this.profilePicWidth = UtilityService.getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
		this.profilePicHeight = UtilityService.getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
	}

	private confirm(event){
		let postObj = {'userid': this.userId, 'friendid': this.friendId};
		this.friendsService.confirmFriendReq(postObj).subscribe(data => this.afterConfirmFriendReq(data));
	}

	private afterConfirmFriendReq(data){
		if(data.status === 'confirmed'){
			this.onFriendConfirmed.emit({data: data});
		}
	}
}
