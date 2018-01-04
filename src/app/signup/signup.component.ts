import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ValidationService } from 'app/services/validators/validation.service';
import { RegistrationService } from 'app/services/data/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RegistrationService]
})
export class SignupComponent implements OnInit {
  @Output() 

  private renderLogin = new EventEmitter();
  private accountCreated = new EventEmitter();
  private signupForm : any;
  private serverMessage = '';
  private isError = false;
  private isStatus = false;

  constructor(private formBuilder : FormBuilder, private registrationService : RegistrationService) {
        this.signupForm = this.formBuilder.group({
      'fullName': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });
    
  }

  ngAfterViewInit() {

  }



  private signUp() {
    if (this.signupForm.dirty && this.signupForm.valid) {
        let postObj = {'fullname': this.signupForm.value.fullName,
                      'email': this.signupForm.value.email,
                      'password': this.signupForm.value.password};
        this.registrationService.signUp(postObj).subscribe(data => this.afterSignUp(data));;
    }
  }

  private afterSignUp(result) {
        if(result.status === 'failure'){
          this.isError = true;
          this.isStatus = false;
          this.serverMessage = result.message;
        }else{
          this.isError = false;
          this.isStatus = true;
          this.serverMessage = result.message+' Redirecting to Login.';
          //setTimeout(()=>{ this.accountCreated.emit(result.status);}, 4000)
          this.accountCreated.emit(result.status);
        }
    }

  ngOnInit() {

  }


  private showLogin(){
  	this.renderLogin.emit('complete');
  }
}
