import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photos-album-icon',
  templateUrl: './photos-album-icon.component.html',
  styleUrls: ['./photos-album-icon.component.css']
})
export class PhotosAlbumIconComponent implements OnInit {

	@Input() item;
	@Output() onEditPhotosAlbum: EventEmitter<any> = new EventEmitter();
	@Output() onShowPhotosList: EventEmitter<any> = new EventEmitter();
  	
  	constructor() { }

  	ngOnInit() {
  	
  	}

  	private editPhotosAlbum(event){
  		this.onEditPhotosAlbum.emit({data: this.item});
  	}
  	
  	private showPhotosList(event){
    	this.onShowPhotosList.emit({data: this.item});
  	}
}