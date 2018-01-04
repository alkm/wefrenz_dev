import { Component, OnInit, AfterViewInit, AfterViewChecked, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UtilityService } from 'app/services/utility/utility.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() chatObj;
	@Output() chatWindowClose:EventEmitter<any> = new EventEmitter();
  @Output() chatWindowReady:EventEmitter<any> = new EventEmitter();
  @Output() startVideoChat:EventEmitter<any> = new EventEmitter();
  @Output() sendMsg:EventEmitter<any> = new EventEmitter();
  @ViewChild('chatWindowBody') chatWindowBody: ElementRef;

  private msgInput: string = ''
  private chatWindowId: string = '';
  private loginData: any;
	private self : any;
  constructor() { 
    let self = this;
    this.loginData = JSON.parse(localStorage.getItem('loginData'));
    window.addEventListener('onMessageDisplay', function (e) {
      try{
        self.displayServerMsg((<CustomEvent>e).detail.msgObj);
      }catch(err){
        console.log(err);
      }
    }, false);
  }

	ngOnInit() {
  }

  ngAfterViewInit(){
    this.chatWindowReady.emit({data: this.chatObj, chatwindow: this});
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  private scrollToBottom(): void {
      try {
          this.chatWindowBody.nativeElement.scrollTop = this.chatWindowBody.nativeElement.scrollHeight;
      } catch(err) { }                 
  }

  private closeChatWindow(chatId){
  	this.chatWindowClose.emit({data: chatId});
  }

  private startVideoCall(){
    this.startVideoChat.emit({data: this.chatObj, chatwindow: this});
  }

  private onEnterPressed(event){
    if(event.keyCode === 13 && !event.shiftKey){
      event.preventDefault();
      let msgObj = {'chatid': this.chatObj.username, 'msg': this.msgInput, 'info': this.loginData }
      this.displayClientMsg(msgObj);
      this.sendMsg.emit(msgObj);
      this.msgInput = '';
      return false;
    }
  }
/*
  private displayClientMsg(msgObj){
    let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";

    let validID = "";

    if(obj.receiverInfo._id !== undefined){
      validID = msgObj.receiverInfo._id;
    }
    //$("chat-window").find("#"+validID).find('.chat-panel-body').empty();
    $("chat-window").find("#"+validID).find('.chat-panel-body').append(html);
    try{
      scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
    //$(".chat-body-height").mCustomScrollbar();
    }catch(err){
      console.log(err);
    }

  }*/

  private displayClientMsg(msgObj){
    //let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    let msgItem = "<div class='client-msg msg-row' style='display: inline-block; width: 100%; max-width: 245px;'><div class='msg-img pull-right no-padding'><img class='profile-pic-small pull-right' src='"+msgObj.info.profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding: 4px 8px; line-height: 20px; max-width: 200px; background: #2b90d9; color: #fff; border-radius: 10px; border-bottom-right-radius: 0px;' class='pull-right text-right msg-field'>"+UtilityService.setSmileys(msgObj.msg)+"</div></div>";
    //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    this.chatWindowBody.nativeElement.insertAdjacentHTML('beforeend', msgItem);
   /* try{
      scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
    //$(".chat-body-height").mCustomScrollbar();
    }catch(err){
      console.log(err);
    }*/
    
  }

  private displayServerMsg(msgObj){
    if(msgObj.item.username === this.chatObj.username){
       //let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    let msgItem = "<div class='client-msg msg-row' style='display: inline-block; width: 100%; max-width: 245px;'><div class='msg-img pull-left no-padding'><img class='profile-pic-small pull-left' src='"+msgObj.item.profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding: 4px 8px; line-height: 20px; max-width: 200px; background: #e9ebee; color: #000; border-radius: 10px; border-bottom-left-radius: 0px;' class='pull-left text-right msg-field'>"+UtilityService.setSmileys(msgObj.msg)+"</div></div>";
    //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    this.chatWindowBody.nativeElement.insertAdjacentHTML('beforeend', msgItem);
   /* try{
      scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
    //$(".chat-body-height").mCustomScrollbar();
    }catch(err){
      console.log(err);
    }*/
    }
    
  }
}
