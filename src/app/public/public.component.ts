import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import 'rxjs/add/operator/pairwise';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})

export class PublicComponent implements OnInit {
	@ViewChild('loginSignUp', {read: ViewContainerRef})
    
    private loginSignUp: ViewContainerRef;
    private loginComponent: any;
    private signupComponent: any;
    private loginRef: any;
    private signupRef: any;
    private previousUrl: string;


	constructor(private componentFactoryResolver: ComponentFactoryResolver, private router: Router){
		if (localStorage.getItem('currentUser')) {
			
			if(localStorage.getItem('currentRoute')){
				let routePath = localStorage.getItem('currentRoute');
				this.router.navigate([routePath]);
			}
			/*this.router.events.pairwise().subscribe((e) => {
            	console.log("eeeeeee"+e);
        	});*/
		}
	}
    ngAfterContentInit(){
    	this.createLoginPanel();	
    }
	ngAfterContentChecked() {

	}
	ngOnInit() {
		
	}

	createLoginPanel(){

		if(this.signupRef){
			this.signupRef.instance.renderLogin.unsubscribe((data) => this.callLogin(data));
			this.signupRef.instance.accountCreated.unsubscribe((data) => this.accountCreated(data));
			this.signupRef.destroy();
		}
		this.loginComponent = this.componentFactoryResolver.resolveComponentFactory(LoginComponent); 
    	this.loginRef = this.loginSignUp.createComponent(this.loginComponent);
    	this.loginRef.instance.renderSignUp.subscribe((data) => this.callSignUp(data));
    	this.loginRef.instance.goHome.subscribe((data) => this.goHome(data));
	}

	createSignupPanel(){
		this.signupComponent = this.componentFactoryResolver.resolveComponentFactory(SignupComponent);
		this.loginRef.instance.renderSignUp.unsubscribe((data) => this.callSignUp(data));
		this.loginRef.instance.goHome.unsubscribe((data) => this.goHome(data));
		this.loginRef.destroy();
		this.signupRef = this.loginSignUp.createComponent(this.signupComponent);
		this.signupRef.instance.renderLogin.subscribe((data) => this.callLogin(data));
		this.signupRef.instance.accountCreated.subscribe((data) => this.accountCreated(data));
	}

	ngAfterViewInit() {
		//this.createLoginPanel();
	}

	private callSignUp(data){
		this.createSignupPanel();
	}

	private goHome(data){
		this.router.navigate(['home']);
	}

	private callLogin(data){
		this.createLoginPanel();
	}

	private accountCreated(data){
		if(data === 'success'){
			this.createLoginPanel();
		}
	}
}
