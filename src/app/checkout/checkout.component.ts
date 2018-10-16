import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

import { MarketService } from '../../app/services/data/market.service';
import { ModalService } from '../modal/modal.service';
import { AddressService } from '../../app/services/data/address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [MarketService, AddressService]
})
export class CheckoutComponent implements OnInit {

	private isMyProfile: boolean = false;
	private userId: string = '';
  private friendId: string = '';
  private screenHeight: number;
  private checkOutItemArr = [];
  private grandTotal: number =  0;
  private modalId: string = "addAddressModal";
  private isAddressAdded: boolean = false;
  private modalTitle: string = '';

  @Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();

	constructor(private route: ActivatedRoute, private router: Router, private marketService: MarketService, private modalService: ModalService, private addressService : AddressService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
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
    this.getAddressInfo();
	}

  	ngOnInit() {
  		this.fetchCheckOut();
  	}

    private placeOrder(event){
      if(this.isAddressAdded){
        this.modalTitle = 'Make Payment';
      }else{
        this.modalTitle = 'Add Address'
      }
      this.openAppModal();
    }

    private openAppModal(modalType = null){
      let self = this;
      self.modalService.open(self.modalId);
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

    private addressSaved(event: any){
      //this.modalService.close(this.modalId);
      this.isAddressAdded = true;
    }

    private getAddressInfo(){
      let postObj = {'username': this.userId};
      this.addressService.getAddressInfo(postObj).subscribe(data => this.afterGotAddressInfo(data));;
    }

    private afterGotAddressInfo(result){
      if(result.status === 'failure'){
          this.isAddressAdded = false;
        }else{
          this.isAddressAdded = true;
      }
    }

}
