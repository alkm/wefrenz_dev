import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()
export class FriendsService {

	constructor(private http : Http) { }

	public setFriendInfo(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/setFriendInfo", postObj, options)
			.map((res:Response) => res.json());
	}
	public getFriendInfo(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/getFriendInfo", postObj, options)
			.map((res:Response) => res.json());
	}

	public getFriendReq(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/getFriendReq", postObj, options)
			.map((res:Response) => res.json());
	}
	
	public getAllFriendReq(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/getAllFriendReq", postObj, options)
			.map((res:Response) => res.json());
	}
	public getRequestDetails(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/getRequestDetails", postObj, options)
			.map((res:Response) => res.json());
	}
	
	public confirmFriendReq(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/confirmFriendReq", postObj, options)
			.map((res:Response) => res.json());
	}

	public getAllConfirmedFriends(postObj){
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/getAllConfirmedFriends", postObj, options)
			.map((res:Response) => res.json());
	}
}
