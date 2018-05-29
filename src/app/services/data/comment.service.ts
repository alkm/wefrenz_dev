import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()
export class CommentService {

	constructor(private http: Http) { }

	public saveComment(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/saveComment", postObj, options)
			.map((res:Response) => res.json());
	}
	public updateComment(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/saveComment", postObj, options)
			.map((res:Response) => res.json());
	}

	public fetchCommentsForCurrentFeedItem(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchCommentsForCurrentFeedItem", postObj, options)
			.map((res:Response) => res.json());
	}

	public deleteCommentItem(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/deleteCommentItem", postObj, options)
		.map((res:Response) => res.json());
	}

	public updateLikeCommentChannel(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateLikeCommentChannel", postObj, options)
		.map((res:Response) => res.json());	
	}

	public updateLoveCommentChannel(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateLoveCommentChannel", postObj, options)
		.map((res:Response) => res.json());	
	}
}
