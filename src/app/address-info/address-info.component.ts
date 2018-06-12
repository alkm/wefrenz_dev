import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {
	@Input('userId') userId;
	private billingTitleOption: string;
	private shippingTitleOption: string;
	private billingForm : any;
	private shippingForm: any;
	private titleOptions = [
		{ name: "Title", value: '' },
    	{ name: "Mr", value: 'Mr' },
    	{ name: "Mrs", value: 'Mrs' },
    	{ name: "Miss", value: 'Miss' }
  	];

  	constructor(private formBuilder : FormBuilder) {
	    this.billingForm = this.formBuilder.group({
	      'bilingTitle': ['', Validators.required],
	      'firstName': ['', Validators.required],
	      'lastName': ['', Validators.required]
	    });

	    this.shippingForm = this.formBuilder.group({
	      'shippingTitle': ['', Validators.required],
	      'sfirstName': ['', Validators.required],
	      'slastName': ['', Validators.required]
	    });
    }

  	ngOnInit() {

  	}
}
