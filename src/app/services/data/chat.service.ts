import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()
export class ChatService {

	constructor(private http: Http) { }

	public getChatBuddyList(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/getChatBuddyList", postObj, options)
			.map((res:Response) => res.json());
	}

}
