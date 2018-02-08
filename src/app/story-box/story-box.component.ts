import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-box',
  templateUrl: './story-box.component.html',
  styleUrls: ['./story-box.component.css']
})
export class StoryBoxComponent implements OnInit {

	private profilePicWidth: number = 50;
	private loginData = undefined;
	private profilePic: string = '';
	private color: string = "#000"

	constructor() { }

	ngOnInit() {
		this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.profilePic = this.loginData.profilepic.imageBuffer;
	}

}
