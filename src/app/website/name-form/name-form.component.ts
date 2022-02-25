import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, User } from '../service/auth-service.service';

@Component({
  selector: 'name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  Obj: User;  
  [x: string]: any;  
  userDisplayName = '';  
  password = '';  
  constructor(private srvLogin: AuthService, private router: Router, public activatedRoute: ActivatedRoute, private cookieService: CookieService) {  
      // this.Obj = new User();  
      // this.userDisplayName = this.cookieService.get('username');  
      // this.password = this.cookieService.get('password');  
      // this.Obj.username = this.userDisplayName;  
      // this.Obj.password = this.password;  
      // console.log(this.Obj)
    if (!srvLogin.checkLogValues()) {  
        router.navigate(['/login']);  
    }  
  }  
  ngOnInit(): void {}  
  logout(): void {  
    alert("logged out")
    this.cookieService.deleteAll();  
    this.router.navigate(['/home']);  
  }  

  // @Output() signUpName = new EventEmitter<string>();
  // @Output() signUpEmail = new EventEmitter<string>();
  // @Output() signUpPassword = new EventEmitter<string>();

  // @Output() signInEmail = new EventEmitter<string>();
  // @Output() signInPassword = new EventEmitter<string>();

  // signUpForm: FormGroup
  // signInForm: FormGroup
  // showSignUpInvalid = false
  // showSignInInvalid = false
  // showLogin = true

  // constructor() { }

  // ngOnInit() {
  //   this.defineForm()
  // }

  // emitNewSignUpForm() {
  //   if(this.signUpForm.status.toUpperCase() == "VALID"){
  //     console.log("new sign up")
  //     this.signUpName.emit(this.signUpForm.controls.name.value);
  //     this.signUpEmail.emit(this.signUpForm.controls.email.value);
  //     this.signUpPassword.emit(this.signUpForm.controls.password.value);

  //     this.showSignUpInvalid = false
  //     this.signUpForm.reset()
  //   } else {
  //     this.showSignUpInvalid = true
  //   }
  // }

  // emitNewSignInForm() {
  //   if(this.signInForm.status.toUpperCase() == "VALID"){
  //     console.log("new sign in")
  //     this.signInEmail.emit(this.signInForm.controls.email.value);
  //     this.signInPassword.emit(this.signInForm.controls.password.value);
  //     this.showSignInInvalid = false
  //     this.signInForm.reset()

  //   } else {
  //     this.showSignInInvalid = true
  //   }
  // }

  // defineForm(){
  //   this.signUpForm = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required),
  //   });
  //   this.signInForm = new FormGroup({
  //     email: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required),
  //   });
  // }

}
