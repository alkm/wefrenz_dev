import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-icon',
  templateUrl: './audio-icon.component.html',
  styleUrls: ['./audio-icon.component.css']
})
export class AudioIconComponent implements OnInit {

	@Input() item;
	private posterURL: string;
 	constructor() { }

  	ngOnInit() {
  		this.posterURL = this.item.poster;
  	}
}
