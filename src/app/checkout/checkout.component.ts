import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MarketService } from 'app/services/data/market.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [MarketService]
})
export class CheckoutComponent implements OnInit {

	private isMyProfile: boolean = false;
	private userId: string = '';
  	private friendId: string = '';
  	private screenHeight: number;
  	private checkOutItemArr = [];
  	private grandTotal: number =  0;

  	@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();

	constructor(private route: ActivatedRoute, private router: Router, private marketService: MarketService) { 
		this.screenHeight = window.screen.height - 175;
    	route.params.subscribe(val => {
  			let currentUser = localStorage.getItem('currentUser');
  			let id = this.route.snapshot.paramMap.get('id');

  			if (!currentUser) {
  				this.triggerLoggedInCheck('onAppLoggedOut', {event: 'onAppLoggedOut', message: 'logged out'});
  				this.onAppLoggedOut.emit('logged Out');
  				this.router.navigate(['public']);	
  				return;
  			}else{
  				this.triggerLoggedInCheck('onAppLoggedIn', {event: 'onAppLoggedIn', message: 'logged in'});
  				this.onAppLoggedIn.emit('logged In');
  				localStorage.setItem('currentRoute', 'checkout/'+id);
  			}

  			
  			if(currentUser === id){
  				this.isMyProfile = true;
  				localStorage.setItem("isMyProfile", 'true');
  				this.userId = currentUser;
  			}else{
  				this.isMyProfile = false;	
  				localStorage.setItem("isMyProfile", 'false');
  				let postObj = {'userid': currentUser, 'friendid': id};
  				this.friendId = id;
  				//this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
  			}
			
			//this.routeSwitch.emit(this.isMyProfile);
			//this.getProfileInfo(id);
		});
	}

  	ngOnInit() {
  		this.fetchCheckOut();
  	}

  	private fetchCheckOut(){
      let postObj = {'username': this.userId};
      this.marketService.fetchCheckOut(postObj).subscribe(data => this.afterFetchCheckOut(data)); 
    }

    private afterFetchCheckOut(result) {
      if(result.status === 'failure'){
          alert(result.message);
        }else{
          this.checkOutItemArr = result.info.checkOutItem;
          this.calculateGrandTotal();
        }
    }

  	private triggerLoggedInCheck(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, evtObj);
    	window.dispatchEvent(evt);
    }

    private calculateGrandTotal(){
    	for(let i in this.checkOutItemArr){
    		this.grandTotal+= (this.checkOutItemArr[i].count * this.checkOutItemArr[i].item.price);
    	}
    }

    private addToTotal(event: any){
    	let amount = event.data;
    	this.grandTotal += amount;
    }

    private subtractFromTotal(event: any){
    	let amount = event.data;
		this.grandTotal -= amount;
    }

}
