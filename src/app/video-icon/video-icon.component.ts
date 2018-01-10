import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-icon',
  templateUrl: './video-icon.component.html',
  styleUrls: ['./video-icon.component.css']
})
export class VideoIconComponent implements OnInit {

	@Input() item;
	private posterURL: string;
  	constructor() { 

  	}

  	ngOnInit() {
  		this.posterURL = this.item.poster;
  	}

}
