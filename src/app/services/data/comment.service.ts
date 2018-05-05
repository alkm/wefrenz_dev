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

	public fetchCommentsForCurrentFeedItem(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchCommentsForCurrentFeedItem", postObj, options)
			.map((res:Response) => res.json());
	}
}
