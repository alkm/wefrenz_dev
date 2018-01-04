import { Component,Input,  OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'app/services/validators/validation.service';

@Component({
  selector: 'app-control-messages',
  template: '<div class="error-message" *ngIf="errorMessage !== null">{{errorMessage}}</div>',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {

	@Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

    get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }

}