import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../../app/services/data/video.service';
import { FormBuilder } from '@angular/forms';

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
  private isShareVideo : boolean = false;
  private videoTitle : string = '';
  private videoDesc : string = '';
  private serverMessage : string = '';
  private isError : boolean = false;
  private isStatus : boolean = false;
  private videoForm : any;


	constructor(private formBuilder: FormBuilder, private videoService: VideoService) {
    this.videoForm = this.formBuilder.group({
      'videoTitle': [],
      'videoDesc': []
    });
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
       this.isShareVideo = false;
       this.onVideoDeleted.emit('videodeleted');
    }

    private shareVideo(event){
      this.isShareVideo = true;
    }

    private onModalClose($event){
      alert('modal closed');
      this.isShareVideo = false;
    }
}


