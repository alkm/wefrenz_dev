import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
	@Input() item;

	private profilePic: string;
	private notificationMsg: string;
	private notificationPic: string;
	constructor() { }

	ngOnInit() {
		this.profilePic = JSON.parse(this.item.profilepic).imageBuffer;
		
		this.notificationPic = this.item.notificationpic;
		if(this.item.type === 'video'){
			 if(this.item.conversion === 'failure'){
			 	this.notificationMsg = "Your video "+this.item.filename+" can't be processed.";
			 }else{
			 	this.notificationMsg = "Your video "+this.item.filename+" is ready.";
			 }

		}
	}

}
