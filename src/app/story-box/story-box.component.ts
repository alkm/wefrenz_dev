import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-box',
  templateUrl: './story-box.component.html',
  styleUrls: ['./story-box.component.css']
})
export class StoryBoxComponent implements OnInit {

	private profilePicWidth: number = 50;
	private loginData = undefined;
	private profilePic: string = '';
	private color: string = "#000"
	private isShowFontFamily: boolean = false;
	private isShowFontSize: boolean = false;
	private fontFamily:string = 'Arial';
	private fontSize: string = 11+'px';
	private isBoldBtnHighLight: boolean = false;
	private isULBtnHighLight: boolean = false;
	private isIBtnHighLight: boolean = false;
	private fontWeight: string = 'normal';
	private txtDeco: string = 'none';
	private fontStyle = 'normal'

	constructor() { }

	ngOnInit() {
		this.loginData = JSON.parse(localStorage.getItem('loginData'));
		this.profilePic = this.loginData.profilepic.imageBuffer;
	}
	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.isShowFontFamily = false;
		this.isShowFontSize = false;
	}
	private clickedInsideFontFamily($event: Event){
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
  	}
  	private clickedInsideFontSize($event: Event){
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
  	}
	private colorPickerChange(event){
		console.log(this.color);
	}
	private toggleFontFamily(event){
		this.isShowFontSize = false;
		if(!this.isShowFontFamily){
			this.isShowFontFamily = true;
		}else{
			this.isShowFontFamily = false;
		}
	}

	private applyFontFamily(event, fontFamily){
		this.isShowFontFamily= false;
		this.fontFamily = fontFamily;
	}
	private toggleFontSize(event){
		this.isShowFontFamily = false;
		if(!this.isShowFontSize){
			this.isShowFontSize = true;
		}else{
			this.isShowFontSize = false;
		}
	}

	private applyFontSize(event, fontSize){
		this.isShowFontSize= false;
		this.fontSize = fontSize.toString()+'px';
	}
	private applyBold(event){
		if(this.isBoldBtnHighLight){
			this.fontWeight = 'normal';
			this.isBoldBtnHighLight = false;
		}else{
			this.fontWeight = 'bold';
			this.isBoldBtnHighLight = true;
		}
	}

	private applyUnderline(event){
		if(this.isULBtnHighLight){
			this.txtDeco = 'none';
			this.isULBtnHighLight = false;
		}else{
			this.txtDeco = 'underline';
			this.isULBtnHighLight = true;
		}
	}

	private applyItalic(event){
		if(this.isIBtnHighLight){
			this.fontStyle = 'normal'
			this.isIBtnHighLight = false;
		}else{
			this.fontStyle = 'italic'
			this.isIBtnHighLight = true;
		}
	}
}
