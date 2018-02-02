import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-icon',
  templateUrl: './photos-icon.component.html',
  styleUrls: ['./photos-icon.component.css']
})
export class PhotosIconComponent implements OnInit {

	@Input() item;
	private posterURL = '';
  	constructor() { }

  	ngOnInit() {
  		this.posterURL = this.item.actualPhoto;
  	}

}
