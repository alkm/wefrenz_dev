import { Component, ViewChild, ElementRef, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
	@Input() item;
	@Output() onPreviewClick: EventEmitter<any> = new EventEmitter();
	
	private profilePic: string;
	private notificationMsg: string;
	private notificationPic: string;
	private isVideoProcessed: boolean = false;
	
	//private videoInfo: Observable<videoInfo{}>;
	constructor() { }

	ngOnInit() {
		this.profilePic = JSON.parse(this.item.profilepic).imageBuffer;
		if(this.item.type === 'video'){
			if(this.item.conversion === 'failure'){
				this.notificationMsg = "Your video can't be processed.";
				this.notificationPic = '/assets/images/error.png';
				this.isVideoProcessed = false;
			}else{
				this.notificationPic = this.item.notificationpic;
				this.notificationMsg = "Your video is ready.";
				this.isVideoProcessed = true; 
			}
		}
	}

  	private previewClickEvent(event, type){
  		//this.openAppModal();
  		this.onPreviewClick.emit({data: this.item});
  	}

}
