import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'app/services/utility/utility.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

	private profilePic: string;
	private profilePicWidth: string;
	private profilePicHeight: string;
	private fullName: string;
	private friendId: string;

	@Input() item;
  	
  	constructor() { }

  	ngOnInit() {
  		this.profilePic = this.item.profilepic.imageBuffer;
		this.fullName = this.item.fullname;
		this.friendId = this.item.username;
		//this.userId = localStorage.getItem('currentUser');
		this.profilePicWidth = UtilityService.getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
		this.profilePicHeight = UtilityService.getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
  	}

}
