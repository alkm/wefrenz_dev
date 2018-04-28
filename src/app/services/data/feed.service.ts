import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()
export class FeedService {

	constructor(private http: Http) { }

	public savePost(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/savePost", postObj, options)
		.map((res:Response) => res.json());
	}

	public refreshFeed(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/refreshFeed", postObj, options)
		.map((res:Response) => res.json());
	}

	public deleteFeedItem(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/deleteFeedItem", postObj, options)
		.map((res:Response) => res.json());
	}

	public updateLikeFeedChannel(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateLikeFeedChannel", postObj, options)
		.map((res:Response) => res.json());	
	}

	public updateLoveFeedChannel(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateLoveFeedChannel", postObj, options)
		.map((res:Response) => res.json());	
	}

}
