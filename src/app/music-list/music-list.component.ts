import { Component, Input, ElementRef, EventEmitter, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  host: {
    '(document:playNext)': 'playNextItem($event)',
    '(document:onPlayAudio)': 'onPlayAudio($event)',
    '(document:onPauseAudio)': 'onPauseAudio($event)'
  }
})
export class MusicListComponent implements OnInit {
	private playMusic = new EventEmitter();
	private pauseMusic = new EventEmitter();
	private resumeMusic = new EventEmitter();
	private replayMusic = new EventEmitter();

	private el: ElementRef;
	private isPlaying: boolean = true;
	private isPause: boolean = false;
	private itemCount: number = 0;
	private musicListClick: boolean = false;
	@ViewChild('musicPlayList') musicPlayList: ElementRef;
	@Input('musicSource') musicSource;
	@Input('actualAudio') actualAudio;


	constructor(el: ElementRef) {
		this.el = el; 
	}

	ngOnInit() {
  	
  	}
  	ngAfterViewInit() {
  		const cutOffHeight = 100;
  		let playListHeight = this.musicPlayList.nativeElement.offsetHeight;
	    const hostElem = this.el.nativeElement;
	    let playListContentHeight = hostElem.parentNode.offsetHeight;
	    if(playListHeight >= (playListContentHeight-cutOffHeight)){
	    	playListHeight = playListContentHeight - cutOffHeight;
	    	this.musicPlayList.nativeElement.style.height = playListHeight+'px';
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
  	onPlayAudio(event){
  		//if(!this.musicListClick){
  			let element = document.getElementById(this.actualAudio);
			element.scrollIntoView({behavior:"smooth"});
  		//}
  		this.isPlaying = true;
  		this.isPause = false;
  		this.musicListClick = false;
  	}
  	onPauseAudio(event){
  		this.isPlaying = false;
  		this.isPause = true;
  	}
  	private musicListItemClick(event, item){
  		this.musicListClick = true;
  		this.playMusic.emit(item);
  		this.isPlaying = true;
  		this.isPause = false;
  		this.actualAudio = item.actualAudio;
  		
  	}
  	private pauseMusiic(event){
  		this.pauseMusic.emit('pause');
  		this.isPause = true;
  		this.isPlaying = false;
  	}
  	private resumeMusiic(event){
  		this.resumeMusic.emit('resume');
  		this.isPause = false;
  		this.isPlaying = true;
  	}
  	private replayMusiic(event){
  		this.replayMusic.emit('replay');
  	}

  	playNextItem(event){
  		this.musicListClick = false;
  		if(this.itemCount < (this.musicSource.length-1)){
  			this.itemCount++;
  		}else{
  			this.itemCount = 0;
  		}
  		let item = this.musicSource[this.itemCount];
  		this.musicListItemClick(null, item);
  		this.actualAudio = item.actualAudio;
  	}

  	private playPreviousItem($event){
  		this.musicListClick = false;
  		if(this.itemCount >=1){
  			this.itemCount--;
  		}else{
  			this.itemCount = this.musicSource.length-1;
  		}
  		let item = this.musicSource[this.itemCount];
  		this.musicListItemClick(null, item);
  		this.actualAudio = item.actualAudio;
  	}
}
