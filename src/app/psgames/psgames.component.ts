import { Component, OnInit } from '@angular/core';
import { ServpsService } from '../servps.service';
@Component({
  selector: 'app-psgames',
  templateUrl: './psgames.component.html',
  styleUrls: ['./psgames.component.css']
})
export class PsgamesComponent implements OnInit {

  psgames=[]
  psgame={}
  
  changegame(b)
  {
    this.psgame=b
  }
  constructor(private b:ServpsService) { }
  
  ngOnInit() {
    this.psgames=this.b.getpsgames()
    this.psgame=this.psgames[0]
  }
}
