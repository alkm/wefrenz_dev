import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { RouteinfoService } from '../../app/services/shareobject/routeinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	//@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();

	private info = undefined;
	private routeInfo = undefined;

	/*get loginData(): any {
		return this.routeinfoService.routeData;
	}
	set loginData(value: any) {
		this.routeinfoService.routeData = value;
	}*/

	constructor(private router: Router, private route: ActivatedRoute, public routeinfoService: RouteinfoService) { 
		route.params.subscribe(val => {
			if (!localStorage.getItem('currentUser')) {
				//this.onAppLoggedOut.emit('logged Out');
				this.triggerLoggedInCheck('onAppLoggedOut', {event: 'onAppLoggedOut', message: 'logged out'});
				this.router.navigate(['public']);	
			}else{
				//this.onAppLoggedIn.emit('logged In');
				this.triggerLoggedInCheck('onAppLoggedIn', {event: 'onAppLoggedIn', message: 'logged in'});
				localStorage.setItem('currentRoute', 'home');
			}
		});
	}

	ngOnInit() {
		/*if(localStorage.getItem('loginData')) {
			this.loginData = localStorage.getItem('loginData');
		}else{
			localStorage.setItem('loginData', this.loginData);
		}*/
		
	}

	private triggerLoggedInCheck(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, evtObj);
    	window.dispatchEvent(evt);
    }
}
