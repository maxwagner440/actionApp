import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppApiServiceService } from '../service/app-api-service.service';
import { AuthService, User } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  incomingSnackMessage: string = 'Please Sign In!';
 // loginEvent = new EventEmitter();
  Obj: User;
  signUpForm: FormGroup
  signInForm: FormGroup
  showSignUpInvalid = false
  showSignInInvalid = false
  showLogin = true
  showSpinner = false;
  constructor(private srvLogin: AuthService, 
    private router: Router, public activatedRoute: ActivatedRoute,
    private cookieService: CookieService, private apiService: AppApiServiceService,) {
      this.Obj = new User();
  }


  user: User;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     console.log(params.navMessage)
     this.incomingSnackMessage = params.navMessage
    });
    this.defineForm()
  }

  loginUser() {
    this.incomingSnackMessage = null;
    if(this.signInForm.controls.email.value && this.signInForm.controls.password.value){
      this.showSpinner = true;
      this.apiService.postUser(
        this.signInForm.controls.email.value,this.signInForm.controls.password.value
      ).subscribe((data: any) => {
        var response = data.response

        if(response.name && response.email) {
          this.showSpinner = false;
          this.cookieService.set('username', response.email);
          this.cookieService.set('name', response.name)
          this.cookieService.set('cookie', this.makeCooke())

          this.handleRoute(response)
        }
        else {
          this.showSpinner = false;
          if(response) {
            this.incomingSnackMessage = response;
          }else {
            this.incomingSnackMessage = "Incorrent username/password";
          }
        }

      })
    }
    else {
      this.showSpinner = false;
      this.incomingSnackMessage = "enter username and password";
    }

  }

  handleRoute(response){
    if (response.true_to_the_game) {
      return this.router.navigate(['/admin-portal']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  makeCooke(){
      var result = '';
      var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      for (var i = 30; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
  }

  create_user() {
    if(this.signUpForm.controls.email.value && this.signUpForm.controls.password.value && this.signUpForm.controls.name.value){
      this.apiService.putUser(
        this.signUpForm.controls.name.value,this.signUpForm.controls.email.value, this.signUpForm.controls.password.value
      ).subscribe((data: any) => {
        if(data.email && data.name) {
          alert("you have signed up with email '"+data.email+"' and are logged in")
          this.cookieService.set('username', data.email);
          this.cookieService.set('cookie', this.makeCooke())
          this.router.navigate(['/home']);
        }
        else {
          alert("Something went wrong")
        }
      })
    }
    else {
      alert("enter username, password and name")
    }
  }

  // emitLoginEvent(){
  //   this.loginEvent.emit("test from event emitter homue")
  // }
  defineForm(){
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
