import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'app/services/utility/data.service';
import { Country } from 'app/services/utility/country.service';
import { State } from 'app/services/utility/state.service';

import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
  providers: [DataService]
})
export class AddressInfoComponent implements OnInit {
	@Input('userId') userId;
	private billingTitleOption: string;
	private shippingTitleOption: string;
	private billingForm : any;
	private shippingForm: any;
	private creditForm: any;
	private selectedCountry:Country = new Country(0, 'India'); 
	private sselectedCountry:Country = new Country(0, 'India'); 
  	private countries: Country[];
  	private states: State[];
  	private scountries: Country[];
  	private sstates: State[];
	private titleOptions = [
		{ name: "Title", value: '' },
    	{ name: "Mr", value: 'Mr' },
    	{ name: "Mrs", value: 'Mrs' },
    	{ name: "Miss", value: 'Miss' }
  	];

  	private cardOptions = [
		{ name: "visa", value: 'visa' },
    	{ name: "visa debit", value: 'visaDebit' },
    	{ name: "mastercard", value: 'mastercard' },
    	{ name: "mastercard debit", value: 'mastercardDebit' },
    	{ name: "american express", value: 'americanExpress' }
  	];



  	constructor(private formBuilder : FormBuilder, private dataService : DataService) {
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
	    
	    this.creditForm = this.formBuilder.group({
	      	'cardTitle': ['', Validators.required],
	      	'nameOnCard': ['', Validators.required],
	      	'cardNumber': ['', Validators.required],
	    	'cardEndDate': ['', Validators.required],
	      	'cvv': ['', Validators.required]
	    });
    }

    private onSelect(countryid) {
    	this.states = this.dataService.getStates().filter((item)=> item.countryid == countryid);
    	this.sstates = this.dataService.getStates().filter((item)=> item.countryid == countryid);
  	}

  	ngOnInit() {

  	}
}
