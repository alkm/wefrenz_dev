import { Component, Input, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CarouseldataService } from 'app/services/shareobject/carouseldata.service';

@Component({
  selector: 'app-photos-carousel',
  templateUrl: './photos-carousel.component.html',
  styleUrls: ['./photos-carousel.component.css'],
  providers: [CarouseldataService]
})
export class PhotosCarouselComponent implements OnInit {

	@Input('imageSource') imageSource;
	//private imageSource: string[];
	private msg: any;
  
  	private config: ICarouselConfig = {
    	verifyBeforeLoad: true,
      	log: false,
      	animation: true,
      	animationType: AnimationConfig.SLIDE,
      	autoplay: true,
      	autoplayDelay: 2000,
      	stopAutoplayMinWidth: 768
    };
  	constructor(private carouseldataService: CarouseldataService) { 

  		//this.carouselImages = this.imageSources;

  	}

	ngOnInit() {
		//this.imageSource = ["photo/original/photo_1517345597409.png","photo/original/photo_1517346068877.png","photo/original/photo_1517346220159.png","photo/original/photo_1517346343644.png"];
		  	
		//this.imageSource = ["photo/original/photo_1517345597409.png","photo/original/photo_1517346068877.png","photo/original/photo_1517346220159.png","photo/original/photo_1517346343644.png"];
  	}
}
