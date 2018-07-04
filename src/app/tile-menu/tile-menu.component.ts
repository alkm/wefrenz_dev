import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UtilityService } from 'app/services/utility/utility.service';

@Component({
  selector: 'app-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements OnInit {

	constructor(private router: Router) { }

  	private activeHighLight = false;
  	private activeHighLightStories = false;
  	private loginData = undefined;
	private profilePic: string;
	private profilePicWidth: string;
	private profilePicHeight: string;
	private fullName: string;
	private userId: string;

  	ngOnInit() {
  		this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.profilePic = this.loginData.profilepic.imageBuffer;
		this.fullName = this.loginData.fullname;
		this.userId = this.loginData.username;
		this.profilePicWidth = UtilityService.getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
		this.profilePicHeight = UtilityService.getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
  	}

  	private navigateToEntertainment(event){
  		this.router.navigate(['entertainment', this.userId]);
  	}

    private navigateToStories(event){
      this.router.navigate(['stories', this.userId]);
    }

    private navigateToMarket(event){
      this.router.navigate(['market', this.userId]);
    }
    private navigateToPeople(event){
      this.router.navigate(['people', this.userId]);
    }  
}
