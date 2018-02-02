import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
	private el: ElementRef;
	@ViewChild('musicPlayList') musicPlayList: ElementRef;
	@Input('musicSource') musicSource;
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
  	}

}
