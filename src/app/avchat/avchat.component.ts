/// <reference path="../../../libs/easyrtc.d.ts" />
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-avchat',
  templateUrl: './avchat.component.html',
  styleUrls: ['./avchat.component.css']
})
export class AvchatComponent implements OnInit {

	private selfEasyrtcid = "";
	private haveSelfVideo = false;
	private onceOnly = true;
	private callerPending = null;
	@ViewChild('selfVideo') selfVideo;
	@ViewChild('callerVideo') callerVideo;

	@ViewChild('shareAudio') shareAudio;
	@ViewChild('shareVideo') shareVideo;
	@ViewChild('expectVideo') expectVideo;
	@ViewChild('expectAudio') expectAudio;

	@ViewChild('connectButton') connectButton;
	@ViewChild('disconnectButton') disconnectButton;
	@ViewChild('hangupButton') hangupButton;
	@ViewChild('iam') iam;
	@ViewChild('otherClients') otherClients;

  @Input() loginData;
	
  private buddyImg = ''; 
  private buddyImgWidth = '200px';
  	constructor() { }

  	ngOnInit() {
      this.buddyImg = this.loginData.profilepic.imageBuffer;
  	}

	/*private disable(domId) {
  		document.getElementById(domId).disabled = "disabled";
	}
	private enable(domId) {
  		document.getElementById(domId).disabled = "";
	}

	private connect() {	
  		easyrtc.enableAudio(this.shareAudio.checked);
  		easyrtc.enableVideo(this.shareVideo.checked);
  		easyrtc.enableDataChannels(true);
  		easyrtc.setRoomOccupantListener( this.convertListToButtons);  
  		easyrtc.connect("easyrtc.audioVideo", this.loginSuccess, this.loginFailure);			  
  		if( this.onceOnly ) {
    		easyrtc.getAudioSinkList( function(list) {
	     		for(let ele of list ) {
	       			this.addSinkButton(ele.label, ele.deviceId);
	     		}
    		});
    		this.onceOnly = false;
  		}
	} 
	private addSinkButton(label, deviceId){
		let self = this;
   		let button = document.createElement("button");
   		button.innerText = label?label:deviceId;
   		button.onclick = function() {
    		easyrtc.setAudioOutput( self.callerVideo, deviceId);
   		}
   		document.getElementById("audioSinkButtons").appendChild(button);
	}
	private hangup() {
  		easyrtc.hangupAll();
  		this.disable("hangupButton");
	}
	private clearConnectList() {
  		while (this.otherClients.hasChildNodes()) {
    		otherClientDiv.removeChild(this.otherClients.lastChild);
  		}
	}
	private convertListToButtons (roomName, occupants, isPrimary) {
  		this.clearConnectList();
  		let otherClientDiv = document.getElementById("otherClients");
  		for(let easyrtcid in occupants) {
    		let button = document.createElement("button");
    		button.onclick = function(easyrtcid) {
      			return function() {
        			this.performCall(easyrtcid);
      			};
    		}(easyrtcid);
    		let label = document.createTextNode("Call " + easyrtc.idToName(easyrtcid));
    		button.appendChild(label);
    		otherClientDiv.appendChild(button);
  		}
	}
	private setUpMirror() {
  		if( !this.haveSelfVideo) {
    		easyrtc.setVideoObjectSrc(this.selfVideo, easyrtc.getLocalStream());
    		this.selfVideo.muted = true;
    		this.haveSelfVideo = true;
  		}
	}	
	private performCall(otherEasyrtcid) {
  		easyrtc.hangupAll();
  		let acceptedCB(accepted, easyrtcid) {
    		if( !accepted ) {
      			easyrtc.showError("CALL-REJECTEd", "Sorry, your call to " + easyrtc.idToName(easyrtcid) + " was rejected");
      			//this.enable("otherClients");
      			this.otherClients.disabled = "";
    		}
  		};
  		let successCB() {
    		if( easyrtc.getLocalStream()) {
    			this.setUpMirror();
    		}
    		this.enable("hangupButton");
  		};
		let failureCB() {
			this.enable("otherClients");
		};
  		easyrtc.call(otherEasyrtcid, successCB, failureCB, acceptedCB);
 		this.enable("hangupButton");
	}

	private loginSuccess(easyrtcid) {
  		this.disable("connectButton");
  		this.enable("disconnectButton");
  		this.enable("otherClients");
  		this.selfEasyrtcid = easyrtcid;
  		document.getElementById("iam").innerHTML = "I am " + easyrtc.cleanId(easyrtcid);
  		easyrtc.showError("noerror", "logged in");
	}
	private loginFailure(errorCode, message) {
  		easyrtc.showError(errorCode, message);
	}
	private disconnect() {
  		easyrtc.disconnect();			  
  		document.getElementById("iam").innerHTML = "logged out";
  		enable("connectButton");
  		this.disable("disconnectButton"); 
  		easyrtc.clearMediaStream( document.getElementById("selfVideo"));
  		easyrtc.setVideoObjectSrc(document.getElementById("selfVideo"),"");
  		easyrtc.closeLocalMediaStream();
  		easyrtc.setRoomOccupantListener( function(){});  
  		this.clearConnectList();
	} 
	easyrtc.setStreamAcceptor( function(easyrtcid, stream) {
  		this.setUpMirror();
  		easyrtc.setVideoObjectSrc(this.callerVideo,stream);
  		this.enable("hangupButton");
	});
	easyrtc.setOnStreamClosed( function (easyrtcid) {
  		easyrtc.setVideoObjectSrc(this.callerVideo, "");
  		this.disable("hangupButton");
	});
	
	easyrtc.setCallCancelled( function(easyrtcid){
  		if( easyrtcid === this.callerPending) {
    		document.getElementById("acceptCallBox").style.display = "none";
    		this.callerPending = false;
  		}
	});
	easyrtc.setAcceptChecker(function(easyrtcid, callback) {
  		document.getElementById("acceptCallBox").style.display = "block";
  		this.callerPending = easyrtcid;
  		if( easyrtc.getConnectionCount() > 0 ) {
    		document.getElementById("acceptCallLabel").innerHTML = "Drop current call and accept new from " + easyrtc.idToName(easyrtcid) + " ?";
  		}
  		else {
    		document.getElementById("acceptCallLabel").innerHTML = "Accept incoming call from " + easyrtc.idToName(easyrtcid) + " ?";
  		}
  		let acceptTheCall = function(wasAccepted) {
    		document.getElementById("acceptCallBox").style.display = "none";
    		if( wasAccepted && easyrtc.getConnectionCount() > 0 ) {
      			easyrtc.hangupAll();
    		}
    		callback(wasAccepted);
    		this.callerPending = null;
  		};
  		document.getElementById("callAcceptButton").onclick = function() {
    		acceptTheCall(true);
  		};
  		document.getElementById("callRejectButton").onclick =function() {
    		acceptTheCall(false);
  		};
	});*/
}
