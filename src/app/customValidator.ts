import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    FormGroup,
    ValidationErrors
  } from '@angular/forms';
  
  export class CustomValidators {
    constructor() {}
  
    static checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
        console.log("run")
      let pass = group.get('password')?.value;
      let confirmPass = group.get('confirmPassword')?.value
      return pass === confirmPass ? null : { notSame: true }
    }
  }
  