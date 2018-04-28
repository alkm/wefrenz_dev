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
  private likeCount: number = 0;
  private loveCount: number = 0;
  private alreadyLiked = false;
  private alreadyLoved = false;
	//private feedMoment: moment.Moment;
	private feedMoment: any;
  	constructor(private feedService: FeedService) { }

  	ngOnInit() {
  		if(this.item.userid === this.userId){
  			this.isMyFeed = true;
  		}

      this.feedActionCheck();
  		let timeagoInstance = timeago();
		  this.feedMoment = timeagoInstance.format(this.item.created);
  		//this.feedMoment = moment(this.item.created);
      this.likeCount = this.item.likeArr.length;
      this.loveCount = this.item.loveArr.length;
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
  		this.isEditFeedItem = false;
	 }

    private feedActionCheck(){
      let i = this.item.likeArr.indexOf(this.userId);
      if(i === -1){
        this.alreadyLiked = false
      }else{
        this.alreadyLiked = true;
      }

      let j = this.item.loveArr.indexOf(this.userId);
      if(j === -1){
        this.alreadyLoved = false
      }else{
        this.alreadyLoved = true;
      }
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

    private likeClick($event){
      let id = this.userId;
      let likeArr = this.item.likeArr;
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

    private loveClick($event){
      let id = this.userId;
      let loveArr = this.item.loveArr;
      let i = loveArr.indexOf(id);
      if(i === -1){
        loveArr.push(id);
        this.alreadyLoved = true;
      }else{
        loveArr.splice(i, 1);
        this.alreadyLoved = false;
      }
      this.loveCount = loveArr.length;
      let postObj = {'id': this.item._id, 'lovearr': loveArr};
      this.feedService.updateLoveFeedChannel(postObj).subscribe(data => this.afterUpdateLoveFeedChannel(data));
    }

    private afterUpdateLikeFeedChannel(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          alert(result.message);
      }
    }

    private afterUpdateLoveFeedChannel(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          alert(result.message);
      }
    }
}
