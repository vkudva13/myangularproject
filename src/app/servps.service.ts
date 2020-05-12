import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServpsService {

  getpsgames()
  {
    return[
      {name:"Marvel Spiderman",
      url:"https://images-na.ssl-images-amazon.com/images/I/81d6JU6g1pL._SL1500_.jpg",
    price:2000,
    Release:new Date("September 7, 2018")
    },
      
      {name:"Last of Us",
      url:"http://s01.riotpixels.net/data/99/47/99474009-463c-464b-80d2-1adefb541b68.png.1080p.png/cover.last-of-us-remastered.855x1080.2014-06-10.3.png",
    price:1000,
    Release:new Date("June 14, 2013")
    },
    {name:"Red Dead Redemption 2",
      url:"http://s01.riotpixels.net/data/a8/97/a897c7ee-cde9-493a-8c3c-e1e013a003d4.jpg.1080p.jpg/cover.red-dead-redemption-2.848x1080.2018-05-07.44.jpg",
    price:4200,
    Release:new Date("October 26, 2018")
    },
    {name:"FIFA 2020",
      url:"http://s01.riotpixels.net/data/b7/98/b7986da2-dd63-445a-8520-b1f8f5585352.jpg.1080p.jpg/cover.fifa-20.982x1080.2019-10-08.14.jpg",
    price:3400,
    Release:new Date("September 23, 2019")
    }
    ]
  }
  constructor() { }
}
