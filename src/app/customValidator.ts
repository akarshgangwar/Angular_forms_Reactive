import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    FormGroup,
    ValidationErrors
  } from '@angular/forms';
  
  export class CustomValidators {
    constructor() {}
  
    // static regexMatcher(regex: RegExp, validatorName: string): ValidatorFn {
    //   return (control: AbstractControl): { [key: string]: boolean } | null => {
    //     if (control.value == '') return null;
  
    //     let re = regex;
    //     if (re.test(control.value)) {
    //       return null;
    //     } else {
    //       return { [validatorName]: true };
    //     }
    //   };
    // }
  
    // static onlyChar = CustomValidators.regexMatcher(new RegExp('^[a-zA-Z ]*$'), 'onlyChar');
    // static noSpace = CustomValidators.regexMatcher(new RegExp('^[^ ]*$'), 'noSpace');
  
    static checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
        console.log("run")
      let pass = group.get('password')?.value;
      let confirmPass = group.get('confirmPassword')?.value
      return pass === confirmPass ? null : { notSame: true }
    }
  }
  