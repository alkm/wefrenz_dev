import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-pic',
  templateUrl: './capture-pic.component.html',
  styleUrls: ['./capture-pic.component.css']
})
export class CapturePicComponent implements OnInit {
	@Output() onCapturePic:EventEmitter<any> = new EventEmitter();
	@Output() onCamRender:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	this.onCamRender.emit('rendered');
  }
  ngAfterContentInit(){

  }

  ngAfterContentChecked() {

  }
	private capture(){
		this.onCapturePic.emit('captured');
	}
}
