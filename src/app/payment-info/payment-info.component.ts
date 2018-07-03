import { Component, OnInit, Input, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
	@Input('userId') userId;
	private creditTitleOption: string;
	private creditForm: any;
	private isTokenReceived: boolean = false;

	private cardOptions = [
  		{ name: "Card Title", value: '' },
		{ name: "visa", value: 'visa' },
    	{ name: "visa debit", value: 'visaDebit' },
    	{ name: "mastercard", value: 'mastercard' },
    	{ name: "mastercard debit", value: 'mastercardDebit' },
    	{ name: "american express", value: 'americanExpress' }
  	];

	constructor(private formBuilder : FormBuilder, private _zone: NgZone) { 

		/*this.creditForm = this.formBuilder.group({
	      	'cardTitle': ['', Validators.required],
	      	'nameOnCard': ['', Validators.required],
	      	'cardNumber': ['', Validators.required],
	    	'cardEndDate': ['', Validators.required],
	      	'cvv': ['', Validators.required]
	    });*/
	}

  ngOnInit() {
  }
  	private saveCrediitInfo(){
  		/*let creditInfo;
  		if (this.creditForm.dirty && this.creditForm.valid) {
        	creditInfo = {'cardTitle': this.creditForm.value.cardTitle,
		                      'nameOnCard': this.creditForm.value.nameOnCard,
		                      'cardNumber': this.creditForm.value.cardNumber,
		                      'cardEndDate': this.creditForm.value.cardEndDate,
		                      'cvv': this.creditForm.value.cvv};
		}*/
  	}

	cardNumber: string;
  	expiryMonth: string;
  	expiryYear: string;
  	cvc: string;
  	message: string;

	getToken() {
		this.message = 'Loading...';
		let self = this;

		(<any>window).Stripe.card.createToken({
		  number: this.cardNumber,
		  exp_month: this.expiryMonth,
		  exp_year: this.expiryYear,
		  cvc: this.cvc
		}, (status: number, response: any) => {

		  // Wrapping inside the Angular zone
		  this._zone.run(() => {
		    if (status === 200) {
		      this.message = "Success! Card token ${response.card.id}.";
		      self.isTokenReceived = true;
		    } else {
		      this.message = response.error.message;
		    }
		  });
		});
	}

	openCheckout() {
	    let handler = (<any>window).StripeCheckout.configure({
	      key: 'pk_test_QegjMgcmJb5xsH11E9grYUUp',
	      locale: 'auto',
	      token: function (token: any) {
	        // You can access the token ID with `token.id`.
	        // Get the token ID to your server-side code for use.
	      }
	    });

	    handler.open({
	      name: 'Demo Site',
	      description: '2 widgets',
	      amount: 0.01
	    });
  	}
}
