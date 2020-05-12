import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Fields } from '../fields';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  
  // constructor(fb:FormBuilder) {
  //   this.form=fb.group({
  //     user:["vignesh"],
  //     phone:[],
  //     gender:[],
  //     Terms:[]
  //       })
  //  }
  constructor(){}
   form=new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(2)]),
    phone:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl()

    })
    
   })
   onsubmit(value)
   {
     console.log(value)
   }
  get user()
  {
    return this.form.get('user')
  }
  // @Input() somedata;
  // @Output() cevent=new EventEmitter
  // disp()
  // {
  //   this.cevent.emit("this is emitting")
  // }
  // res()
  // {
  //   this.title="";
  // }
}