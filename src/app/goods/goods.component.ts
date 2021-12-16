import {Component, Input, OnInit} from '@angular/core';
import { Goods } from 'src/app/shared/goods'; //add for lab 3
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
//for 3 lab
  catalogTitle = 'Catalog';

  @Input() dishes: Goods[] = [];//for 3

  constructor() { }

  ngOnInit()  {
  }

  colAadaptive: any = 3;// Для адаптиву cols(tsconfig.json додано рядок "noImplicitAny": false,)
   onResize(event) {
     const element = event.target.innerWidth;
     console.log(element);

     if (element < 950) {
       this.colAadaptive = 2;
     }

     if (element > 950) {
       this.colAadaptive = 3;
     }

     if (element < 750) {
       this.colAadaptive = 1;
     }
   }/*//lab 3*/
}
