import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()
export class MarketService {

	constructor(private http: Http) { }

	public addItem(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/addItem", postObj, options)
		.map((res:Response) => res.json());
	}

	public fetchMarketItems(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchMarketItems", postObj, options)
		.map((res:Response) => res.json());
	}

	public doCheckOut(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/doCheckOut", postObj, options)
		.map((res:Response) => res.json());
	}
	
	public fetchCheckOut(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchCheckOut", postObj, options)
		.map((res:Response) => res.json());
	}

}
