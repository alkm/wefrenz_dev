import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettingsService } from '../../services/settings/app-settings.service';
//import { Observable } from 'rxjs/Rx';

@Injectable()
export class UploadService {
	private progress: any;
	private progressObserver: any;
	constructor(private http: Http) {
		/*this.progress = Observable.create(observer => {
        	this.progressObserver = observer
    	}).share();*/
	}

	/*public makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
	    return Observable.create(observer => {
	        let formData: FormData = new FormData(),
	            xhr: XMLHttpRequest = new XMLHttpRequest();

	        for (let i = 0; i < files.length; i++) {
	            formData.append("uploads[]", files[i], files[i].name);
	        }

	        xhr.onreadystatechange = () => {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    observer.next(JSON.parse(xhr.response));
	                    observer.complete();
	                } else {
	                    observer.error(xhr.response);
	                }
	            }
	        };

	        xhr.upload.onprogress = (event) => {
	            this.progress = Math.round(event.loaded / event.total * 100);

	            //this.progressObserver.next(this.progress);
	        };

	        xhr.open('POST', url, true);
	        xhr.send(formData);
	    });
  	}*/

  	public uploadEncodedProfilePic(postObj) {
		let headers = new Headers({ 'Accept': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(AppSettingsService.API_ENDPOINT("local")+"/api/uploadEncodedProfilePic", postObj, options)
			.map((res:Response) => res.json());
	}
}
