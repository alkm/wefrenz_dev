import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
//import * as moment from 'moment';
import { FeedService } from 'app/services/data/feed.service';
import timeago from 'timeago.js';

@Component({
  selector: 'app-feeditem',
  templateUrl: './feeditem.component.html',
  styleUrls: ['./feeditem.component.css']
})
export class FeeditemComponent implements OnInit {

	@Input('item') item;
	@Input('userId') userId;
	@Output() refreshFeed: EventEmitter<any> = new EventEmitter();
	private isEditFeedItem: boolean = false;
	private isMyFeed: boolean = false;
	//private feedMoment: moment.Moment;
	private feedMoment: any;
  	constructor(private feedService: FeedService) { }

  	ngOnInit() {
  		if(this.item.userid === this.userId){
  			this.isMyFeed = true;
  		}
  		let timeagoInstance = timeago();
		this.feedMoment = timeagoInstance.format(this.item.created);
  		//this.feedMoment = moment(this.item.created);
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
  		this.isEditFeedItem = false;
	}
  	private editFeedItem(event){

  	}

  	private clickedInside($event: Event){
  		if(this.isEditFeedItem){
  			this.isEditFeedItem = false;
  		}else{
  			this.isEditFeedItem = true;
  		}
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
  	}
  	private deleteFeedItem(){
  		 let postObj = {'id': this.item._id};
  		 this.feedService.deleteFeedItem(postObj).subscribe(data => this.afterFeedItemDeleted(data));
  	}

  	private afterFeedItemDeleted(result) {
    	if(result.status === 'failure'){
      		alert(result.message);
      	}else{
      		this.refreshFeed.emit('refresh');
    	}
  	}
}
