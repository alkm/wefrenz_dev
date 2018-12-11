import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../../app/services/data/video.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  providers: [VideoService]
})
export class PreviewComponent implements OnInit  {
	@Input() previewInfo;
	@ViewChild('videoplayer') videoplayer: ElementRef;
	@Output() onPreviewWindowReady: EventEmitter<any> = new EventEmitter();
  @Output() onVideoDeleted: EventEmitter<any> = new EventEmitter();

	private previewPosterPath: string = '';
	private previewMP4VideoPath: string = '';

	constructor(private videoService: VideoService) {

  }

  	ngOnInit() {
  	}

  	ngAfterViewInit(){
  		this.onPreviewWindowReady.emit('previewready');

  	}

    private deletePreviewVideo(event, data){
      let postObj = {'filepath': this.previewInfo.filepath, 'itemid': this.previewInfo.itemid};
      this.videoService.deletePreviewVideo(postObj).subscribe(data => this.afterVideoDeleted(data));
    }

     private afterVideoDeleted(result) {
       this.onVideoDeleted.emit('videodeleted');
    }
}


