import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio-album-icon',
  templateUrl: './audio-album-icon.component.html',
  styleUrls: ['./audio-album-icon.component.css']
})
export class AudioAlbumIconComponent implements OnInit {

	@Input() item;
	@Output() onEditAudioAlbum: EventEmitter<any> = new EventEmitter();
  @Output() onShowAudioList: EventEmitter<any> = new EventEmitter();
  	
  constructor() { }

  ngOnInit() {
  	
  }

  private editAudioAlbum(event){
  	this.onEditAudioAlbum.emit({data: this.item});
  }

  private showAudioList(event){
    this.onShowAudioList.emit({data: this.item});
  }
}
