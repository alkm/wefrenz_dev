import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

	private addItemForm: any;
	private isItemImg: boolean = false;
	private croppedImage: any;
	private imageChangedEvent: any;
	private files: any;
	private encodedImage: any;

	@Input('userId') userId;

	constructor(private formBuilder : FormBuilder) { 
		this.addItemForm = this.formBuilder.group({
	      'for': ['', Validators.required],
	      'name': ['', Validators.required],
	      'price': ['', Validators.required],
	      'email': ['', [Validators.required, ValidationService.emailValidator]],
	      'itemDesc': ['', Validators.required]
	    });
	}

  	ngOnInit() {
  	
  	}

  	private imageCropped(image: string) {
    	this.croppedImage = image;
  	}
  	private computeCroppedImage(){
  		let elem = <HTMLElement>document.querySelector('#croppedImg');
  	}
	private fileChangeEvent(event){
		this.isItemImg = true;
		this.imageChangedEvent = event;
  		this.files = event.target.files[0];
        //this.uploadCanvasPic();
  		var self = this;
      	if (event.target.files && event.target.files[0]) {
        	let reader = new FileReader();
	        reader.onload = function (e : any) {
	            self.encodedImage = e.target.result;
	        }

	        reader.readAsDataURL(event.target.files[0]);
	    }
	    /*var files = fileInput.srcElement.files;
	    console.log(files);
	    this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
	      console.log('sent');
	    });*/
	}

	private uploadEncodedItemPic(encodedImage){
		let postObj = {'imagebuffer': encodedImage, 'userid': this.userId};
     //   this.uploadService.uploadEncodedProfilePic(postObj).subscribe(data => this.afterItemPicUploaded(data));
	}
	private afterItemPicUploaded(result){
		//alert(result.message);
		if(result.status === 'success'){
			/*this.profilePic = result.info.profilepic.imageBuffer;
			localStorage.setItem('loginData', JSON.stringify(result.info));
			this.previewPicModal.close();*/
		}
	}
	private ok(){
		//this.uploadEncodedProfilePic(this.croppedImage);
	}

}
