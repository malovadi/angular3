import { Component } from '@angular/core';

//add for lab 3

import * as _ from 'lodash';

import { Goods } from 'src/app/shared/goods';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diana-malovana-app';
//all next code - add for lab3
 some_goods: Goods[] = [];
  filtredDishes: Goods[] = [];
  groups: any[] = [];
  constructor() {}

  ngOnInit() {


    for (let i = 1; i < 10; i++) {
      let mygoods = {
        id: i,
        name: 'ITEM ' + i,
        image: 'https://picsum.photos/600/430',
        description:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
        weight: i * Math.floor(Math.random() * 12),
        category: 'Category ' + (1 + Math.floor(Math.random() * 4)),
        price: i * Math.floor(Math.random() * 22),
      };
      this.some_goods.push(mygoods);
    }

    this.groups = _(this.some_goods)
      .groupBy((x) => x.category)
      .map((value, key) => ({category: key, dishes: value}))
      .value();

    setTimeout(() => {
      this.filtredDishes = this.some_goods;

    }, 2000);
  }
  filterDishes(some_goods: Goods[]) {


    setTimeout(() => {
      this.filtredDishes = some_goods;

    }, 1500);
  }
}
