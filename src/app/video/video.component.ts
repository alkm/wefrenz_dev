/// <reference path="../../../libs/easyrtc.d.ts" />

import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent {

  constructor(private cdr:ChangeDetectorRef) { 
    //this.loadScript('http://localhost:3000/libs/socket.io/socket.io.js');
    //this.loadScript('http://localhost:3000/libs/easyrtc/easyrtc.js');
  }

  myId:string = '';
  connectedClientsList:Array<string> = [];

  clearConnectList():void {
    this.connectedClientsList = [];
    this.cdr.detectChanges();
  }
  
  performCall(clientEasyrtcId:string):void {
    let successCB = function(a:string, b:string):void {};
    let failureCB = function(a:string, b:string):void {};
    easyrtc.call(clientEasyrtcId, successCB, failureCB, undefined, undefined);
  }

  buildCaller(easyrtcid:string):(()=>void) {
    return ():void => {
      this.performCall(easyrtcid);
    };
  }

  convertListToButtons (roomName:string, data:Easyrtc_PerRoomData, isPrimary:boolean):void {
    this.clearConnectList();
    for(let easyrtcid in data) {
      this.connectedClientsList.push(easyrtc.idToName(easyrtcid));
    }
    this.cdr.detectChanges();
  }

  updateMyEasyRTCId(myEasyRTCId:string):void {
    this.myId = myEasyRTCId;
    this.cdr.detectChanges();
  }
  
  loginSuccess(easyrtcid:string):void {
    this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
  }

  loginFailure(errorCode:string, message:string):void {
    this.updateMyEasyRTCId('Login failed. Reason: '+ message);
  }

  connect():void {
    easyrtc.setVideoDims(320, 240, undefined);
    let convertListToButtonShim = (roomName:string, data:Easyrtc_PerRoomData, isPrimary:boolean):void => {
      this.convertListToButtons(roomName, data, isPrimary);
    }
    easyrtc.setRoomOccupantListener(convertListToButtonShim);
    easyrtc.easyApp("easyrtc.audioVideoSimple", "videoSelf", ["videoCaller"], this.loginSuccess.bind(this), this.loginFailure.bind(this));
  }

  ngAfterViewInit() {
   // let socketServer = "http://localhost:3000/";
  //  easyrtc.setSocketUrl(socketServer, {});
    this.connect();
  }

  private loadScript(url) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
 }

 private connectVideo(){}

}