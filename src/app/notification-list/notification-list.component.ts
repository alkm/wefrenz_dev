import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
	@Input() item;

	private profilePic: string;
	private fullName: string;
	private notificationPic: string;
	constructor() { }

	ngOnInit() {
		this.profilePic = JSON.parse(this.item.profilepic).imageBuffer;
		this.fullName = this.item.fullname;
		this.notificationPic = this.item.notificationpic;
		if(this.item.type === 'video'){
			 if(this.item.conversion === 'failure'){
			 	this.fullName = 'Your video can not be processed.';
			 }
		}
	}

}
