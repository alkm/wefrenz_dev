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

  @Input('item') item;
  @Input('commentItem') commentItem;
  @Input('userId') userId;
	@Output() refreshFeed: EventEmitter<any> = new EventEmitter();
  @Output() refreshUpdatedComment: EventEmitter<any> = new EventEmitter();
  @Output() editCurrentCommentItem: EventEmitter<any> = new EventEmitter();

  private isEditCommentItem: boolean = false;
  private isMyComment: boolean = false;
  private likeCount: number = 0;
  private loveCount: number = 0;
  private alreadyLiked: boolean = false;
  private alreadyLoved: boolean = false;
  private addComment: boolean = false;
  private operation: string = 'add';
  private editComment: boolean = false;
  private action:string = 'comment';
  private isCommentsAdded: boolean = false;
  //private userId: string = '';
	//private feedMoment: moment.Moment;
  private feedItemCommentArr = [];
  private commentMoment: any;
  private containerHeight: number = 0;
  private scrollHeight : number = 0;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  	if(this.commentItem.commentfrom === this.userId){
  		this.isMyComment = true;
  	}

    this.commentActionCheck();
  	let timeagoInstance = timeago();
		this.commentMoment = timeagoInstance.format(this.commentItem.created);
  		//this.feedMoment = moment(this.commentItem.created);
      	this.likeCount = this.commentItem.likeArr.length;
      	this.loveCount = this.commentItem.loveArr.length;
      	//this.fetchCommentsForCurrentCommentItem();
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
  		this.isEditCommentItem = false;
	}

    private commentActionCheck(){
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
  	private clickedInside($event: Event){
  		if(this.isEditCommentItem){
  			this.isEditCommentItem = false;
  		}else{
  			this.isEditCommentItem = true;
  		}
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
  	}
    private editCommentItem(event){
      this.editCurrentCommentItem.emit({commentItem: this.commentItem});
      this.editComment = true;
      this.operation = 'edit';
    }
  	private deleteCommentItem(){
  		let postObj = {'id': this.commentItem._id};
  		this.commentService.deleteCommentItem(postObj).subscribe(data => this.afterCommentItemDeleted(data));
  	}

  	private afterCommentItemDeleted(result) {
    	if(result.status === 'failure'){
      		alert(result.message);
      	}else{
      		//this.refreshFeed.emit('refresh');
          this.refreshUpdatedComment.emit({item: this.item._id});
    	}
  	}

    private likeClick($event){
      let id = this.userId;
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
      this.commentService.updateLikeCommentChannel(postObj).subscribe(data => this.afterUpdateLikeCommentChannel(data));
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
      this.commentService.updateLoveCommentChannel(postObj).subscribe(data => this.afterUpdateLoveCommentChannel(data));
    }

    private commentClick($event){
      if(this.addComment || this.editComment){
        this.addComment = false;  
        this.editComment = false; 
      }else{
        this.addComment = true;
        this.editComment = true;
        this.operation = 'add';
      }
    }

    private afterUpdateLikeCommentChannel(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          alert(result.message);
      }
    }

    private afterUpdateLoveCommentChannel(result) {
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
    private refreshCommentItem(event){
      this.refreshUpdatedComment.emit({item: event.data});
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

    private closeStory(event){
      this.addComment = false;
      this.editComment = false;
    }
}
