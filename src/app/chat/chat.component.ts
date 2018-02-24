import { NgModule, Component, NgZone, OnDestroy, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as io from '../../../libs/socket.io';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router'; 
import { AppSettingsService } from 'app/services/settings/app-settings.service';
import { ChatService } from 'app/services/data/chat.service';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})

@NgModule({
    imports: [
         FormsModule      
    ]})

export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {

	private chatBuddyList: any;
	private userId: string = '';
	private intervalId: any;
	private chatWindowList: any;
	private socket: any;
	private profilePic: any;
	private loginData: any;
	private windowReady: boolean = true;
	private cachedChatData: any;
	private selfEasyrtcid = "";
	private modalId = 'avModal';

	@ViewChild('appChatWindow') appChatWindow;

	constructor(private router: Router, private chatService: ChatService, private cdr : ChangeDetectorRef, private modalService: ModalService, private ngZone: NgZone) { 
		this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.userId = this.loginData.username;
		this.profilePic = this.loginData.profilepic.imageBuffer;
		this.chatWindowList = [];
		//this.openChatSocket();
		this.connect();
	}
	myId:string = '';
  	connectedClientsList:Array<string> = [];

	ngOnInit() {
		window.app = window.app || {};
		window.app.namespace = window.app.namespace || {};
		window.app.namespace.callFromExternalInterface = this.callFromExternalInterface.bind(this);
	}

	ngOnDestroy() {
		window.app.namespace.callFromExternalInterface = null;
	}

	callFromExternalInterface(easyrtcId) {
    	return this.ngZone.run(() => this.syncUserInfoWithEasyRTCId(easyrtcId));
  	}

	ngAfterViewInit(){
		this.pullChatBuddyList();
		this.subscribeToChatBuddyList();
	}

	private connect() {
		this.triggerWindowEvent('onConnect', {'event': 'onConnect', 'msgObj': {}});
		let self = this;
		window.addEventListener('onEasyRTCIDCreated', function (e) {
		    try {
		        let easyRTCId = (<CustomEvent>e).detail.eventObj;
		        self.openChatSocket(easyRTCId);
		    }
		    catch (err) {
		        console.log(err);
		    }
		}, false);
	  //easyrtc.setVideoDims(1280,720);
	  //easyrtc.enableDebug(false);
	  //rtc.easyrtc.setRoomOccupantListener(convertListToButtons);
	  //rtc.easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], loginSuccess, loginFailure);
	}

	private subscribeToChatBuddyList(): void {
    	 this.intervalId = setInterval(() => { this.pullChatBuddyList(); }, 1000 * 10);
	}

	private pullChatBuddyList(){
		let postObj = {'userid': this.userId};
		this.chatService.getChatBuddyList(postObj).subscribe(data => this.afterChatBuddyList(data));
	}

	private afterChatBuddyList(data){
		this.chatBuddyList = data;
		var self = this;
		window.addEventListener('onCallBuddy', function (e) {
		    try {
		    	self.syncChatBuddiesWithVideoCall((<CustomEvent>e).detail.callbuddy);
		    }
		    catch (err) {
		        console.log(err);
		    }
		}, false);
	}

	private openChatWindow(item){
		let match = false;
		for(let i in this.chatWindowList){
			if(this.chatWindowList[i].username === item.username){
				match = true;
			}
		}
		if(!match){
			this.chatWindowList.push(item);	
		}
	}

	private startVideoChat(event){
		let self = this;
  		self.modalService.open(self.modalId);
  		self.syncChatBuddiesWithVideoCall(event.data.username);
  		window.addEventListener('closeAVModal', function (e) {
		    try {
		        self.modalService.close(self.modalId);
		    }
		    catch (err) {
		        console.log(err);
		    }
		}, false);
	}
	private syncChatBuddiesWithVideoCall(matchBuddy){
		let chatBuddyList = this.chatBuddyList;
		for(let obj in chatBuddyList){
			if(chatBuddyList[obj].username === matchBuddy){
				let callBuddy = chatBuddyList[obj].username;
				let easyrtcId = chatBuddyList[obj].easyrtcid;
				if(easyrtcId !== ''){
					this.triggerWindowEvent('startVideoChat', {'event': 'startVideoChat', 'easyrtcid': easyrtcId, 'callbuddy': callBuddy});
				}
			}
		}
	}
	private syncEasyrtcIdWithVideoCall(easyrtcId){
		let chatBuddyList = this.chatBuddyList;
		for(let obj in chatBuddyList){
			if(chatBuddyList[obj].easyrtcid === easyrtcId){
				let callBuddy = chatBuddyList[obj].username;
				window["callBuddy"] = callBuddy;

			}
		}
	}

	public syncUserInfoWithEasyRTCId(easyrtcId){
		let chatBuddyList = this.chatBuddyList;
		for(let i in chatBuddyList){
			if(chatBuddyList[i].easyrtcid === easyrtcId){
				let obj = {'fullname': chatBuddyList[i].fullname, 'profilepic': chatBuddyList[i].profilepic};
				return obj;
			}
		}
	}
	private chatWindowClose(event){
		let chatId: string = event.data as string;
		for(let i in this.chatWindowList){
			if(this.chatWindowList[i].username === chatId){
				this.chatWindowList.splice(i, 1);
			}
		}
	}
	private chatWindowReady(event){
		let chatWindow = event.chatwindow;
		if(!this.windowReady){
			let data = event.data;
			let chatId: string = data.username;
			if(chatId === this.cachedChatData.item.username){
				this.windowReady = true;
				try{
					chatWindow.displayServerMsg(this.cachedChatData);
					delete this.cachedChatData;
				}catch(err){
					console.log(err);
				}

			}
		}
	}

	private openChatSocket(easyrtcId)
	{
		var self = this;
		let chatObj = {'userid': this.userId, 'easyrtcid': easyrtcId};
		//require(['socket-io'], function(io) {
		//this.socket = io('https://192.168.1.3:3000/');
		//this.socket = io('https://wefrenz.com:3000/');
		//this.socket = io("'"+ AppSettingsService.API_ENDPOINT("local") +"'");
		//this.socket = io('https://10.20.17.49:3000');
		this.socket = io('https://localhost:3000/');
		//this.socket = io('https://192.168.225.177:3000/');
		this.socket.emit('ON_SOCKET_INIT', chatObj);
		/*socket.on("UPDATE_CHAT_LIST", function(data){
			//alert('update chat list');
			updateChatList();
		});*/

		//Getting the new msg from server
		this.socket.on('ON_NEW_MSG', function(data){
			self.openChatWindowOnNewMessage(data);
			//console.log('new msg'+ data.chatid+'///'+ data.msg);
		});

	    window.addEventListener('onAppLoggedOut', function (e) {
        	self.closeSocket();
        	self.triggerWindowEvent('onDisConnect', {'event': 'onConnect', 'msgObj': {}});
        }, false);
        
        window.addEventListener('onCallAcceptChecker', function (e) {
        	self.syncEasyrtcIdWithVideoCall((<CustomEvent>e).detail.easyrtcid);
	    	self.checkCallAcceptor();
        }, false);
	}

	private checkCallAcceptor(){
		let self = this;
		self.modalService.open(self.modalId);

	}
	private closeSocket(){
		this.socket.disconnect();
	}
	//Sending message to the other user connected through socket
	private sendMsg(event){
		console.log(event.chatid+'///'+event.msg);
		let chatObj= {'chatid': event.chatid, 'msg': event.msg, 'item': this.loginData};
		this.socket.emit('ON_SEND_MSG', chatObj);
	}

	private openChatWindowOnNewMessage(data){
		this.cachedChatData = {};
		let match = false;
		for(let i in this.chatWindowList){
			if(this.chatWindowList[i].username === data.item.username){
				match = true;
			}
		}
		if(!match){
			this.windowReady = false;
			this.cachedChatData = data;
			this.chatWindowList.push(data.item);	
		}else{	
			this.windowReady = true;
			delete this.cachedChatData;
			//this.appChatWindow.displayServerMsg(data);
			this.triggerWindowEvent('onMessageDisplay', {'event': 'onMessageDisplay', 'msgObj': data});
		}
		
	}

	private triggerWindowEvent(eventType: string, evtObj: any) {
    	let evt = new CustomEvent(eventType, {'detail': evtObj});
    	window.dispatchEvent(evt);
    }

    //Video Chat Implementation
}
