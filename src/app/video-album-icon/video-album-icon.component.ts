import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-album-icon',
  templateUrl: './video-album-icon.component.html',
  styleUrls: ['./video-album-icon.component.css']
})


export class VideoAlbumIconComponent implements OnInit {

	@Input() item;
	@Output() onEditVideoAlbum: EventEmitter<any> = new EventEmitter();
  @Output() onShowVideoList: EventEmitter<any> = new EventEmitter();

  	constructor() { }

    ngOnInit() {
  	}

  	private editVideoAlbum(event){
  		this.onEditVideoAlbum.emit({data: this.item});
  	}

    private showVideoList(event){
      this.onShowVideoList.emit({data: this.item});
    }
}
