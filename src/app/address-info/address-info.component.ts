import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AddressService } from 'app/services/data/address.service';
import { DataService } from 'app/services/utility/data.service';
import { Country } from 'app/services/utility/country.service';
import { State } from 'app/services/utility/state.service';

import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
  providers: [DataService, AddressService]
})
export class AddressInfoComponent implements OnInit {
	@Input('userId') userId;
	@Output() addressSaved: EventEmitter<any> = new EventEmitter();

	private billingTitleOption: string;
	private shippingTitleOption: string;
	private billingForm : any;
	private shippingForm: any;
	private selectedCountry:Country = new Country(0, 'India'); 
	private sselectedCountry:Country = new Country(0, 'India'); 
  	private countries: Country[];
  	private states: State[];
  	private scountries: Country[];
  	private sstates: State[];
  	private countryChoosen: string = '';
  	private stateChoosen: string = '';
  	private sCountryChoosen: string = '';
  	private sStateChoosen: string = '';
  	private bindFirstName: string = '';
  	private bindLastName: string = '';
  	private bindHouseNo: string = '';
  	private bindStreetName: string = '';
  	private bindZipCode: string = '';

	private titleOptions = [
		{ name: "Title", value: '' },
    	{ name: "Mr", value: 'Mr' },
    	{ name: "Mrs", value: 'Mrs' },
    	{ name: "Miss", value: 'Miss' }
  	];

  	private stitleOptions = [
		{ name: "Title", value: '' },
    	{ name: "Mr", value: 'Mr' },
    	{ name: "Mrs", value: 'Mrs' },
    	{ name: "Miss", value: 'Miss' }
  	];

  	constructor(private formBuilder : FormBuilder, private dataService : DataService, private addressService : AddressService) {
  		this.countries = this.dataService.getCountries();
	    this.billingForm = this.formBuilder.group({
	      'bilingTitle': ['', Validators.required],
	      'firstName': ['', Validators.required],
	      'lastName': ['', Validators.required],
	      'houseNo': ['', Validators.required],
	      'streetName': ['', Validators.required],
	      'zipCode': ['', Validators.required],
	      'countryList': ['', Validators.required],
	      'stateList': ['', Validators.required]
	    });
	    this.scountries = this.dataService.getCountries();
	    this.shippingForm = this.formBuilder.group({
	      	'shippingTitle': ['', Validators.required],
	      	'sfirstName': ['', Validators.required],
	      	'slastName': ['', Validators.required],
	    	'shouseNo': ['', Validators.required],
	      	'sstreetName': ['', Validators.required],
	      	'szipCode': ['', Validators.required],
	      	'scountryList': ['', Validators.required],
	      	'sstateList': ['', Validators.required]
	    });
    }

    private onSelect(countryid) {
    	this.states = this.dataService.getStates().filter((item)=> item.countryid == countryid);
    	this.sstates = this.dataService.getStates().filter((item)=> item.countryid == countryid);
  	}

  	private onChange(event: any, item){
  		let self = this;
  		let selectElementText = event.target['options']
      	[event.target['options'].selectedIndex].text;
  		switch(item) {
		    case 'country':
		    	self.countryChoosen = selectElementText;
		        break;
		    case 'state':
		    	self.stateChoosen = selectElementText;
		        break;
		    case 'scountry':
		    	self.sCountryChoosen = selectElementText;
		        break;
		    case 'sstate':
		    	self.sStateChoosen = selectElementText;
		        break;
		    default:
		}
  	}

  	private saveAddressInfo(event: any){
  		let billingInfo;
  		let shippingInfo;
  		if (this.billingForm.dirty && this.billingForm.valid) {
        	billingInfo = {'bilingTitle': this.billingForm.value.bilingTitle,
		                      'firstName': this.billingForm.value.firstName,
		                      'lastName': this.billingForm.value.lastName,
		                      'houseNo': this.billingForm.value.houseNo,
		                      'streetName': this.billingForm.value.streetName,
		                      'zipCode': this.billingForm.value.zipCode,
		                      'countryList': this.countryChoosen,
		                      'stateList': this.stateChoosen};
		}
		if (this.shippingForm.dirty && this.shippingForm.valid) {
        	shippingInfo = {'shippingTitle': this.shippingForm.value.shippingTitle,
		                      'sfirstName': this.shippingForm.value.sfirstName,
		                      'slastName': this.shippingForm.value.slastName,
		                      'shouseNo': this.shippingForm.value.shouseNo,
		                      'sstreetName': this.shippingForm.value.sstreetName,
		                      'szipCode': this.shippingForm.value.szipCode,
		                      'scountryList': this.sCountryChoosen,
		                      'sstateList': this.sStateChoosen};
		}

		let postObj = {'username': this.userId,
		          'billingInfo': billingInfo,
		          'shippingInfo': shippingInfo};

		this.addressService.addAddressInfo(postObj).subscribe(data => this.afterAddressInfoAdded(data));
        
  	}

  	private afterAddressInfoAdded(result) {
        if(result.status === 'failure'){
        }else{
        	this.addressSaved.emit('addressSaved');
        }
    }

    checkBoxChange(event:any){
		let isChecked = event.currentTarget.checked;
		if(isChecked){
			this.shippingTitleOption = this.billingForm.value.bilingTitle;
			this.bindFirstName = this.billingForm.value.firstName;
			this.bindLastName = this.billingForm.value.lastName;
			this.bindHouseNo = this.billingForm.value.houseNo;
			this.bindStreetName = this.billingForm.value.streetName;
			this.bindZipCode = this.billingForm.value.zipCode;

		}else{
			this.bindFirstName = '';
			this.bindLastName = '';
			this.bindHouseNo = '';
			this.bindStreetName = '';
			this.bindZipCode = '';
			//this.shippingTitleOption = '';
			let selectBox = document.getElementById("shippingTitleOpt") as HTMLSelectElement;
			selectBox.selectedIndex = 0;
		}
	}

  	ngOnInit() {

  	}
}
