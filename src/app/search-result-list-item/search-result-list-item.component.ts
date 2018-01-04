import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UtilityService } from 'app/services/utility/utility.service';

@Component({
  selector: 'app-search-result-list-item',
  templateUrl: './search-result-list-item.component.html',
  styleUrls: ['./search-result-list-item.component.css']
})

export class SearchResultListItemComponent implements OnInit {

	private profilePic: string;
	private profilePicWidth: string;
	private profilePicHeight: string;
	private fullName: string;
	private email: string;
	private isSearchResult: boolean = false;

	constructor(private router: Router) { }
	@Input() item;
	ngOnInit() {
		//this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.profilePic = this.item.profilepic.imageBuffer;
		this.fullName = this.item.fullname;
		this.email = this.item.username;
		this.profilePicWidth = UtilityService.getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
		this.profilePicHeight = UtilityService.getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
  	}

  	private searchListItemClick(event){
  		//if(this.router.url === '/home'){
  			this.router.navigate(['profile', this.email]);
  		//}else{

  		//}
  		
  	}
}
