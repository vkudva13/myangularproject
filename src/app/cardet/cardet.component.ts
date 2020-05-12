import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardet',
  templateUrl: './cardet.component.html',
  styleUrls: ['./cardet.component.css']
})
export class CardetComponent implements OnInit {

  @Input() cardet;
  constructor() { }

  ngOnInit() {
  }

}
