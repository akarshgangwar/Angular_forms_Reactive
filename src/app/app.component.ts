import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './customValidator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    gender: new FormControl('', [Validators.required]),
    terms: new FormControl('', [Validators.requiredTrue]),
  }, { validators: CustomValidators.checkPasswords    }
  );

  constructor() {
    console.log(this.loginForm.value);
  }

  onSubmit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

  title = 'reactiveForms';
}
