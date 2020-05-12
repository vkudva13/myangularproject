import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    pwd:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })
  onLogin(value)
  {
    console.log(value)
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
