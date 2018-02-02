import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CarouseldataService {

	private carouselSource = new BehaviorSubject<string>("default message");
  	public currentCarouselSource = this.carouselSource.asObservable();
  	constructor() { }
	
	public changeCarouselSource(msg: string) {
    	this.carouselSource.next(msg);
  	}

}
