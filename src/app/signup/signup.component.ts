import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    pwd:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })

  onSignup(value)
  {
    console.log(value)
  }
  get username()
  {
    return this.form.get('username')
  }
  get email()
  {
    return this.form.get('email')
  }
  get pwd()
  {
    return this.form.get('pwd')
  }
}
