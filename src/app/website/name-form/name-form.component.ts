import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  @Output() signUpName = new EventEmitter<string>();
  @Output() signUpEmail = new EventEmitter<string>();
  @Output() signUpPassword = new EventEmitter<string>();

  @Output() signInEmail = new EventEmitter<string>();
  @Output() signInPassword = new EventEmitter<string>();

  signUpForm: FormGroup
  signInForm: FormGroup
  showSignUpInvalid = false
  showSignInInvalid = false
  showLogin = true

  constructor() { }

  ngOnInit() {
    this.defineForm()
  }

  emitNewSignUpForm() {
    if(this.signUpForm.status.toUpperCase() == "VALID"){
      console.log("new sign up")
      this.signUpName.emit(this.signUpForm.controls.name.value);
      this.signUpEmail.emit(this.signUpForm.controls.email.value);
      this.signUpPassword.emit(this.signUpForm.controls.password.value);

      this.showSignUpInvalid = false
      this.signUpForm.reset()
    } else {
      this.showSignUpInvalid = true
    }
  }

  emitNewSignInForm() {
    if(this.signInForm.status.toUpperCase() == "VALID"){
      console.log("new sign in")
      this.signInEmail.emit(this.signInForm.controls.email.value);
      this.signInPassword.emit(this.signInForm.controls.password.value);
      this.showSignInInvalid = false
      this.signInForm.reset()

    } else {
      this.showSignInInvalid = true
    }
  }

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
