import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  arr=[
    {names:"varsha",gender:"f"},
    {names:"sadhan",gender:"m"},
    {names:"vignesh",gender:"m"},
  {names:"praveen",gender:"m"}
  ]
  g="f"
  ngOnInit() {
  }

}
