import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { RouteinfoService } from '../../app/services/shareobject/routeinfo.service';
import { ValidationService } from '../../app/services/validators/validation.service';
import { RegistrationService } from '../../app/services/data/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RegistrationService]
})
export class LoginComponent implements OnInit {
  @Output() 

  private renderSignUp = new EventEmitter();
  private goHome = new EventEmitter();
  private loginForm : any;
  private serverMessage = '';
  private isError = false;
  private isStatus = false;

 /* get loginData(): any {
    return this.routeinfoService.routeData;
  }
  set loginData(value: any) {
    this.routeinfoService.routeData = value;
  }*/

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, public routeinfoService: RouteinfoService) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
  ngAfterContentInit(){

  }

  ngAfterContentChecked() {

  }

  private logIn(){
    if (this.loginForm.dirty && this.loginForm.valid) {
     // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
      let postObj = {'email': this.loginForm.value.email,
        'password': this.loginForm.value.password};
        this.registrationService.logIn(postObj).subscribe(data => this.afterLogIn(data));
    }
  }

  private afterLogIn(result) {
      if(result.status === 'failure'){
        this.isError = true;
        this.isStatus = false;
        this.serverMessage = result.message;
      }else{
        this.isError = false;
        this.isStatus = true;
        this.serverMessage = result.message+'. Redirecting to Home.';
        localStorage.setItem('currentUser', result.info.username);
        //setTimeout(()=>{ this.goHome.emit(result.status);}, 4000)
        localStorage.setItem('loginData', JSON.stringify(result.info));
        this.goHome.emit(result);
      }
  }

  private showSignUp(){
  	this.renderSignUp.emit('complete');
  }
}
