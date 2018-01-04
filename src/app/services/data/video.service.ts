import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()

export class VideoService {

	constructor(private http: Http) { }

	public createVideoAlbum(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/createVideoAlbum", postObj, options)
		.map((res:Response) => res.json());
	}

	public updateVideoAlbum(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateVideoAlbum", postObj, options)
		.map((res:Response) => res.json());
	}

	public fetchVideoAlbumInfo(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchVideoAlbumInfo", postObj, options)
		.map((res:Response) => res.json());
	}
}
