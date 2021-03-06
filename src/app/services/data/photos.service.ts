import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from '../../../app/services/settings/app-settings.service';

@Injectable()
export class PhotosService {

  constructor(private http: Http) { }

  public createPhotosAlbum(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/createPhotosAlbum", postObj, options)
		.map((res:Response) => res.json());
	}

	public updatePhotosAlbum(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/updatePhotosAlbum", postObj, options)
		.map((res:Response) => res.json());
	}

	public fetchPhotosAlbumInfo(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchPhotosAlbumInfo", postObj, options)
		.map((res:Response) => res.json());
	}
	public fetchAlbumPhotosInfo(postObj){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/fetchAlbumPhotosInfo", postObj, options)
		.map((res:Response) => res.json());
	}

}
