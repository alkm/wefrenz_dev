import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from '../../../app/services/settings/app-settings.service';

@Injectable()
export class NotificationService {

  	constructor(private http: Http) { }

	public updateNotificationDisplay(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateNotificationDisplay", postObj, options)
		.map((res:Response) => res.json());
	}

	public checkNotification(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/checkNotification", postObj, options)
		.map((res:Response) => res.json());
	}

}
