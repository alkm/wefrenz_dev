import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
//import * as moment from 'moment';
import { FeedService } from 'app/services/data/feed.service';
import { CommentService } from 'app/services/data/comment.service';
import timeago from 'timeago.js';

@Component({
  selector: 'app-feeditem',
  templateUrl: './feeditem.component.html',
  styleUrls: ['./feeditem.component.css'],
  providers: [CommentService]
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
  private alreadyLiked: boolean = false;
  private alreadyLoved: boolean = false;
  private addComment: boolean = false;
  private action: string = 'comment';
  private isCommentsAdded: boolean = false;
	//private feedMoment: moment.Moment;
  private feedItemCommentArr = [];
	private feedMoment: any;

  private skip: number = 0;
  private limit: number = 3;
  private total: number = 0;
  private isLoading: boolean = false;
  private isViewMore: boolean = false;


  constructor(private feedService: FeedService, private commentService: CommentService) { }

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
      this.fetchCommentsForCurrentFeedItem(this.item._id);
  	}
  	@HostListener('document:click', ['$event']) clickedOutside($event){
  		this.isEditFeedItem = false;
	 }
    private resetCommentParam(){
      this.skip = 0;
      this.limit = 3;
      this.total = 0;
      this.feedItemCommentArr = [];
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
    private editCurrentCommentItem(event){
      /*let self = this;
      self.postId = event.commentItem._id;
      self.commentType = event.commentItem.commenttype;
      self.commentText = event.commentItem.commenttext;

      if(self.commentType === 'text'){
        self.isAddPost = false;
        self.color = event.item.colorInfo;
        self.fontFamily = event.item.fontFamily;
        self.fontSize = event.item.fontSize;
        self.fontStyle = event.item.fontStyle;
        self.txtDeco = event.item.textDecoration;
        self.fontWeight = event.item.fontWeight;
        self.storyContent = event.item.post;
        }
      else if(self.fileType === 'image'){
        self.isPostImage = false;
          self.encodedImage = event.item.filePath;
          self.openAppModal();
        }else{
          self.postedMusicPath = event.item.filePath;
          self.musicPlayer.nativeElement.load();
          self.openAppModal();
        }*/
      
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
          debugger;
      		this.refreshFeed.emit('refresh');
    	}
  	}

    private refreshFeedItem($event){
      this.refreshFeed.emit('refresh');
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

    private fetchCommentsForCurrentFeedItem(commentId){
      this.isLoading = true;
      let postObj = {'feeditemid': commentId, 'skip': this.skip, 'limit': this.limit};
      this.commentService.fetchCommentsForCurrentFeedItem(postObj).subscribe(data => this.afterFetchedCommentsForCurrentFeedItem(data));
    }

    private afterFetchedCommentsForCurrentFeedItem(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          let data = result.infos;
          this.total = result.total;
          if(this.total > 0){
            this.isCommentsAdded = true;
          }
          for(let i in data){
            this.feedItemCommentArr.push(data[i]);
          }
          if(this.feedItemCommentArr.length < this.total){
            this.isViewMore = true;
          }else{
            this.isViewMore = false;
          }
      }
      this.isLoading = false;
    }

    private refreshCommentItem(event){
      this.resetCommentParam();
      this.fetchCommentsForCurrentFeedItem(event.data);
      this.addComment = false;
    }

    private viewMore(event){
        this.skip = this.skip + this.limit;
        if(this.skip < this.total){
            this.fetchCommentsForCurrentFeedItem(this.item._id);
            this.isViewMore = true;
        }else{
          this.isViewMore = false;
        }
    }
}
