import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items=[]

  constructor(private http:HttpClient) {

   }
   getsearch(sname)
   {
     this.http.get<any>(`http://www.omdbapi.com/?apikey=1c863ad6&s=${sname}`).subscribe(data=>this.items=data.Search)
     
   }
  ngOnInit() {}
  }
  

