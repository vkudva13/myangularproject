import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcgames',
  templateUrl: './pcgames.component.html',
  styleUrls: ['./pcgames.component.css']
})
export class PcgamesComponent implements OnInit {

  constructor() { }

pcgames=[
  {name:"DOOM Eternal",
  url:"https://i111.fastpic.ru/big/2020/0321/62/2dcd5c2ade25e4204701141c668e2662.jpg",
price:1200,
Release:new Date("March 20, 2020")
},
{name:"Grand Theft Auto V",
url:"https://i59.fastpic.ru/big/2015/0414/c6/b57bf7d0bf2425637e27245d67e729c6.jpg",
price:3400,
Release:new Date("April 13, 2015")
},
{name:"Bioshock",
url:"https://i78.fastpic.ru/big/2016/0917/12/d75a239035e1512ce1fc93512adb4412.jpg",
price:123,
Release:new Date("August 21, 2007")
},
{name:"DOOM Eternal",
url:"https://i111.fastpic.ru/big/2020/0321/62/2dcd5c2ade25e4204701141c668e2662.jpg",
price:1200,
Release:new Date("March 20, 2020")
},
{name:"Grand Theft Auto V",
url:"https://i59.fastpic.ru/big/2015/0414/c6/b57bf7d0bf2425637e27245d67e729c6.jpg",
price:3400,
Release:new Date("April 13, 2015")
},
{name:"Bioshock",
url:"https://i78.fastpic.ru/big/2016/0917/12/d75a239035e1512ce1fc93512adb4412.jpg",
price:123,
Release:new Date("August 21, 2007")
}
]
selectedgame=this.pcgames[0]
select(game)
{
  this.selectedgame=game
}
  ngOnInit() {
  }

}
