import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
	@Input() previewInfo;
	@ViewChild('videoplayer') videoplayer: ElementRef;
	@Output() onPreviewWindowReady: EventEmitter<any> = new EventEmitter();

	private previewPosterPath: string = '';
	private previewMP4VideoPath: string = '';

	constructor() { }

  	ngOnInit() {
  		
  	}

  	ngAfterViewInit(){
  		this.onPreviewWindowReady.emit('previewready');
  	}
}
