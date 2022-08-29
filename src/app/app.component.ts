import { Component } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm=new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    gender:new FormControl(''),
    terms:new FormControl('')
  })
  constructor(){
    console.log(this.loginForm.value)
  }

  onSubmit()
  {
    console.log(this.loginForm.value)
  }

  title = 'reactiveForms';
}
