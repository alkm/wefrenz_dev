import { Component, Input, ElementRef, EventEmitter, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  host: {
    '(document:playNextVideo)': 'playNextItem($event)',
    '(document:onPlayVideo)': 'onPlayVideo($event)',
    '(document:onPauseVideo)': 'onPauseVideo($event)'
  }
})
export class VideoListComponent implements OnInit {
	private playVideo = new EventEmitter();
	private pauseVideo = new EventEmitter();
	private resumeVideo = new EventEmitter();
	private replayVideo = new EventEmitter();

	private el: ElementRef;
	private isPlaying: boolean = true;
	private isPause: boolean = false;
	private itemCount: number = 0;
	private videoListClick: boolean = false;
	private isShow: boolean = true;
	private bgSize: string = 'cover'; 
	private ml: number = 2;
	private mr: number  = 2;
	private iw: number = 17;
	private ih: number = 17;
	@ViewChild('videoPlayList') videoPlayList: ElementRef;
	@Input('videoSource') videoSource;
	@Input('mp4Video') mp4Video;


	constructor(el: ElementRef) {
		this.el = el; 
	}

	ngOnInit() {
  	
  	}
  	ngAfterViewInit() {
  		const cutOffHeight = 100;
  		let playListHeight = this.videoPlayList.nativeElement.offsetHeight;
	    const hostElem = this.el.nativeElement;
	    let playListContentHeight = hostElem.parentNode.offsetHeight;
	    if(playListHeight >= (playListContentHeight-cutOffHeight)){
	    	playListHeight = playListContentHeight - cutOffHeight;
	    	this.videoPlayList.nativeElement.style.height = playListHeight+'px';
	    }
	    //this.actualAudio = this.musicSource[0].actualAudio;
	    this.addEventListeners();
  	}
  	private removeEventListeners(){
  		//let self = this;
  		if (document.removeEventListener) {         // For all major browsers, except IE 8 and earlier
			//document.removeEventListener('playNext', this.playNextItem);
			//document.removeEventListener('onPauseAudio', this.onPauseAudio);
			//document.removeEventListener('onPlayAudio', this.onPlayAudio);
		}

  	}

  	private addEventListeners(){
  		//document.addEventListener('playNext', this.playNextItem);
		//document.addEventListener('onPauseAudio', this.onPauseAudio);
		//document.addEventListener('onPlayAudio', this.onPlayAudio);
  	}
  	onPlayVideo(event){
  		//if(this.musicListClick === false){
  		//}
  		this.isPlaying = true;
  		this.isPause = false;
  		this.videoListClick = false;
  	}
  	onPauseVideo(event){
  		this.videoListClick = false;
  		this.isPlaying = false;
  		this.isPause = true;
  	}
  	private videoListItemClick(event, item, indx){
  		this.videoListClick = true;
  		this.playVideo.emit(item);
  		this.isPlaying = true;
  		this.isPause = false;
  		this.mp4Video = item.mp4Video;
  		this.itemCount = Number(indx);
  	}
  	private pauseVideeo(event){
  		this.videoListClick = false;
  		this.pauseVideo.emit('pause');
  		this.isPause = true;
  		this.isPlaying = false;
  	}
  	private resumeVideeo(event){
  		this.videoListClick = false;
  		this.resumeVideo.emit('resume');
  		this.isPause = false;
  		this.isPlaying = true;
  	}
  	private replayVideeo(event){
  		this.replayVideo.emit('replay');
  	}

  	playNextItem(event){
  		this.videoListClick = false;
  		if(this.itemCount < (this.videoSource.length-1)){
  			this.itemCount++;
  		}else{
  			this.itemCount = 0;
  		}
  		let item = this.videoSource[this.itemCount];
  		this.videoListItemClick(null, item, this.itemCount);
  		this.mp4Video = item.mp4Video;
  		this.smoothItemScroll();
  	}

  	private playPreviousItem(event){
  		this.videoListClick = false;
  		if(this.itemCount >=1){
  			this.itemCount--;
  		}else{
  			this.itemCount = this.videoSource.length-1;
  		}
  		let item = this.videoSource[this.itemCount];
  		this.videoListItemClick(null, item, this.itemCount);
  		this.mp4Video = item.mp4Video;
  		this.smoothItemScroll();
  	}

  	private smoothItemScroll(){
  		const body = document.getElementsByTagName('body')[0];
    	body.style.position = "fixed";
  		let element = document.getElementById(this.mp4Video);
		element.scrollIntoView({behavior:"smooth"});
		body.style.position = "relative";
  	}
  	private hideControls(event){
  		this.isShow = false;
  	}
  	private showControls(event){
  		this.isShow = true;
  	}
}

