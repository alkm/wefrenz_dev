import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsService } from '../../../app/services/settings/app-settings.service';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  	public querySearch(postObj) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/querySearch", postObj, options)
			.map((res:Response) => res.json());
	}

}
