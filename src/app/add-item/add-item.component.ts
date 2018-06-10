import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MarketService } from 'app/services/data/market.service';

import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [MarketService]
})
export class AddItemComponent implements OnInit {

	private addItemForm: any;
	private isItemImg: boolean = false;
	private croppedImage: any;
	private imageChangedEvent: any;
	private files: any;
	private encodedImage: any;
	private radioMode:boolean = true;
	private category = { options: 'Women' };

	@Input('userId') userId;
	@Output() refreshMarket: EventEmitter<any> = new EventEmitter();

	constructor(private formBuilder: FormBuilder, private marketService: MarketService) { 
		this.addItemForm = this.formBuilder.group({
			'category': [],
	      	'itemName': ['', Validators.required],
	      	'itemPic': ['', Validators.required],
	      	'price': ['', Validators.required],
	      	'email': ['', [Validators.required, ValidationService.emailValidator]],
	      	'contactNo': ['', Validators.required],
	      	'location': ['', Validators.required],
	      	'itemDesc': ['', Validators.required]
	    });
	}

  	ngOnInit() {
  	
  	}

  	private addItem(event: any){
  		//if (this.addItemForm.dirty && this.addItemForm.valid) {
			let postObj = {'category':this.category.options, 
							'itemName':this.addItemForm.controls.itemName._value, 
							'price':this.addItemForm.controls.price._value,
							'email':this.addItemForm.controls.email._value,
							'contactNo':this.addItemForm.controls.contactNo._value, 
							'location':this.addItemForm.controls.location._value,
							'itemDesc':this.addItemForm.controls.itemDesc._value,
							'imagebuffer': this.encodedImage, 
							'userid': this.userId};
	    	this.marketService.addItem(postObj).subscribe(data => this.afterItemAdded(data));
	   /* }else{
	    	alert('Filed mark with * are required.');
	    }*/
	}
	private afterItemAdded(result){
		//alert(result.message);
		if(result.status === 'success'){
			/*this.profilePic = result.info.profilepic.imageBuffer;
			localStorage.setItem('loginData', JSON.stringify(result.info));*/
			this.refreshMarket.emit('refreshMarket');

		}
	}
  	private keyPressOnContact(event: any) {
	    const pattern = /[0-9\+\-\ ]/;

	    let inputChar = String.fromCharCode(event.charCode);
	    if (event.keyCode != 8 && !pattern.test(inputChar)) {
	      event.preventDefault();
	    }
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


	private ok(){
		//this.uploadEncodedProfilePic(this.croppedImage);
	}

}
