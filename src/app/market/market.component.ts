import { Component, OnInit, EventEmitter, Output, HostListener, ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RouteinfoService } from 'app/services/shareobject/routeinfo.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

	@ViewChild('scrollMe') private myScrollContainer: ElementRef;
	@ViewChild('addProductModal') addProductModal;
	@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
	@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();
	@Output() marketScrollEnd: EventEmitter<any> = new EventEmitter();

	private isMyProfile: boolean = false;
	private userId: string = '';
    private friendId: string = '';
    private screenHeight: number;
    private overFlowY: string = 'visible';
    private isMarketSortItems: boolean = false;
    private sortSelection: string = "Relevance";
    private modalId: string = 'marketModal';

	constructor(private route: ActivatedRoute, private router: Router, private modalService: ModalService) { 
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
				localStorage.setItem('currentRoute', 'market/'+id);
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
    @HostListener('scroll', ['$event'])
	private onScroll(event: any) {
		let element = this.myScrollContainer.nativeElement
	    let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
	    if (atBottom) {
	        //this.feedScrollEnd.emit('scroll end');
	       // this.storyBoxComponent.onFeedScrollEnd();
	    } 
	}

	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.isMarketSortItems = false;	
	}

	private clickedInside(event: any){
		event.preventDefault();
	    event.stopPropagation();  // <- that will stop propagation on lower layers
		if(this.isMarketSortItems){
			this.isMarketSortItems = false;	
		}else{
			this.isMarketSortItems = true;	
		}
	}

	private sortItemClick(event: any){
		this.sortSelection = event.target.innerText;
		this.isMarketSortItems = false;
	}

	private addItemToMarket(event: any){
		this.openAppModal();
	}

	private openAppModal(modalType = null){
  		let self = this;
  		self.modalService.open(self.modalId);
  	}

  	private refreshMarket(event: any){
  		this.addProductModal.close();
  	}
}