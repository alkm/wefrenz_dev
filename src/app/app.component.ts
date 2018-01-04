import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
	
  private isLoggedIn = false;

	constructor(private router : Router, private route: ActivatedRoute) {
    	//router.navigate(['public']);
    	if (localStorage.getItem('currentUser')) {
    		if(localStorage.getItem('currentRoute')){
    			let routePath = localStorage.getItem('currentRoute');
				  this.router.navigate([routePath]);
    		}else{
    			this.router.navigate(['public']);	
    		}
	    }else{
	    	this.router.navigate(['public']);
	    }
      let self = this;
      route.params.subscribe(val => {
        window.addEventListener('onAppLoggedOut', function (e) {
          // e.target matches elem
          self.isLoggedIn = false;
        }, false);
        window.addEventListener('onAppLoggedIn', function (e) {
          // e.target matches elem
          self.isLoggedIn = true;
        }, false);
    });

	    // not logged in so redirect to login page with the return url and return false
	    //this.router.navigate(['/public'], { queryParams: { returnUrl: state.url }});
	    //return false;
  	}
    ngOnInit() {
      
    }
    ngAfterViewInit(){

    }

}
