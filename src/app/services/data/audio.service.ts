import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from 'app/services/settings/app-settings.service';

@Injectable()
export class AudioService {

	constructor(private http: Http) { }

  	public createAudioAlbum(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/createAudioAlbum", postObj, options)
		.map((res:Response) => res.json());
	}

	public updateAudioAlbum(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updateAudioAlbum", postObj, options)
		.map((res:Response) => res.json());
	}

	public fetchAudioAlbumInfo(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchAudioAlbumInfo", postObj, options)
		.map((res:Response) => res.json());
	}
	public fetchAlbumAudioInfo(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchAlbumAudioInfo", postObj, options)
		.map((res:Response) => res.json());
	}

}
