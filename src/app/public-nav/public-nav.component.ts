import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-nav',
  templateUrl: './public-nav.component.html',
  styleUrls: ['./public-nav.component.css']
})
export class PublicNavComponent implements OnInit {

	private active = false;
	private innerWidth = 0;
	
	constructor() { }
	
	ngOnInit() {
  		this.checkInnerWidth();
  	}

  	private onResize(event) {
		this.checkInnerWidth();
	}
	
	private checkInnerWidth(){
		this.innerWidth = window.innerWidth;
		if(this.innerWidth < 768){
			this.active = true;
		}else{
			this.active = false;
		}
	}

	private toggleNav(event) {
		if(!this.active){
	    	this.active = true;
	  	}else{
	  		this.active = false;
	  	}
	}

}
