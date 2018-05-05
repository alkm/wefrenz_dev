import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
//import * as moment from 'moment';
import { CommentService } from 'app/services/data/comment.service';
import timeago from 'timeago.js';

@Component({
  selector: 'app-commentitem',
  templateUrl: './commentitem.component.html',
  styleUrls: ['./commentitem.component.css'],
  providers: [CommentService]
})
export class CommentitemComponent implements OnInit {

	@Input('commentItem') commentItem;
	@Output() refreshFeed: EventEmitter<any> = new EventEmitter();
  	@Output() editCurrentFeedItem: EventEmitter<any> = new EventEmitter();
  	private isEditFeedItem: boolean = false;
  	private isMyComment: boolean = false;
  	private likeCount: number = 0;
  	private loveCount: number = 0;
  	private alreadyLiked: boolean = false;
  	private alreadyLoved: boolean = false;
  	private addComment: boolean = false;
  	private action:string = 'comment';
  	private isCommentsAdded: boolean = false;
  	private userId: string = '';
	//private feedMoment: moment.Moment;
  	private feedItemCommentArr = [];
	private commentMoment: any;
  	constructor(private commentService: CommentService) { }

  	ngOnInit() {
  		if(this.commentItem.commentfrom === this.commentItem.commentto){
  			this.isMyComment = true;
  		}

      	this.feedActionCheck();
  		let timeagoInstance = timeago();
		this.commentMoment = timeagoInstance.format(this.commentItem.created);
  		//this.feedMoment = moment(this.commentItem.created);
      	this.likeCount = this.commentItem.likeArr.length;
      	this.loveCount = this.commentItem.loveArr.length;
      	//this.fetchCommentsForCurrentCommentItem();
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
  		this.isEditFeedItem = false;
	 }

    private feedActionCheck(){
      let i = this.commentItem.likeArr.indexOf(this.userId);
      if(i === -1){
        this.alreadyLiked = false
      }else{
        this.alreadyLiked = true;
      }

      let j = this.commentItem.loveArr.indexOf(this.userId);
      if(j === -1){
        this.alreadyLoved = false
      }else{
        this.alreadyLoved = true;
      }
    }
  	private editFeedItem(event){
      this.editCurrentFeedItem.emit({commentItem: this.commentItem});
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
  		 let postObj = {'id': this.commentItem._id};
  		 //this.feedService.deleteFeedItem(postObj).subscribe(data => this.afterFeedItemDeleted(data));
  	}

  	private afterFeedItemDeleted(result) {
    	if(result.status === 'failure'){
      		alert(result.message);
      	}else{
      		this.refreshFeed.emit('refresh');
    	}
  	}

    private likeClick($event){
      let id = this.commentItem.userId;
      let likeArr = this.commentItem.likeArr;
      let i = likeArr.indexOf(id);
      if(i === -1){
        likeArr.push(id);
        this.alreadyLiked = true;
      }else{
        likeArr.splice(i, 1);
        this.alreadyLiked = false;
      }
      this.likeCount = likeArr.length;
      let postObj = {'id': this.commentItem._id, 'likearr': likeArr};
      //this.feedService.updateLikeFeedChannel(postObj).subscribe(data => this.afterUpdateLikeFeedChannel(data));
    }

    private loveClick($event){
      let id = this.userId;
      let loveArr = this.commentItem.loveArr;
      let i = loveArr.indexOf(id);
      if(i === -1){
        loveArr.push(id);
        this.alreadyLoved = true;
      }else{
        loveArr.splice(i, 1);
        this.alreadyLoved = false;
      }
      this.loveCount = loveArr.length;
      let postObj = {'id': this.commentItem._id, 'lovearr': loveArr};
      //this.feedService.updateLoveFeedChannel(postObj).subscribe(data => this.afterUpdateLoveFeedChannel(data));
    }

    private commentClick($event){
      if(this.addComment){
        this.addComment = false;  
      }else{
        this.addComment = true;
      }
      
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

    private fetchCommentsForCurrentCommentItem(){
      let postObj = {'feeditemid': this.commentItem._id};
    //  this.commentService.fetchCommentsForCurrentCommentItem(postObj).subscribe(data => this.afterFetchedCommentsForCurrentFeedItem(data));
    }

    private afterFetchedCommentsForCurrentFeedItem(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          if(result.length > 0){
            this.isCommentsAdded = true;
            this.feedItemCommentArr = result;
          }
      }
    }
}
