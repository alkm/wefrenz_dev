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
  @Output() editCurrentFeedItem: EventEmitter<any> = new EventEmitter();
	private isEditFeedItem: boolean = false;
	private isMyFeed: boolean = false;
  private likeCount = 0;
  private alreadyLiked = false;
	//private feedMoment: moment.Moment;
	private feedMoment: any;
  	constructor(private feedService: FeedService) { }

  	ngOnInit() {
  		if(this.item.userid === this.userId){
  			this.isMyFeed = true;
  		}

      let i = this.item.coolArr.indexOf(this.userId);
      if(i === -1){
        this.alreadyLiked = false
      }else{
        this.alreadyLiked = true;
      }
  		let timeagoInstance = timeago();
		  this.feedMoment = timeagoInstance.format(this.item.created);
  		//this.feedMoment = moment(this.item.created);
      this.likeCount = this.item.coolArr.length;
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
  		this.isEditFeedItem = false;
	}
  	private editFeedItem(event){
      this.editCurrentFeedItem.emit({item: this.item});
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

    private coolClick($event){
      let id = this.userId;
      let likeArr = this.item.coolArr;
      let i = likeArr.indexOf(id);
      if(i === -1){
        likeArr.push(id);
        this.alreadyLiked = true;
      }else{
        likeArr.splice(i, 1);
        this.alreadyLiked = false;
      }
      this.likeCount = likeArr.length;
      let postObj = {'id': this.item._id, 'likearr': likeArr};
      this.feedService.updateLikeFeedChannel(postObj).subscribe(data => this.afterUpdateLikeFeedChannel(data));
    }

    private afterUpdateLikeFeedChannel(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          alert(result.message);
      }
    }
}
