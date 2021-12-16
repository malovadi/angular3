import { Component, OnInit, Input  } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {
 // @Input()
  //item: Item = null as any;
  item: Item;

  constructor() {
    this.item = item;//3 лаб
  }

 /* ngOnInit(): void {
  }*/
  ngOnInit() {
    console.log(this.item);
  }

}
const item: Item = {
  id: '1',
  name: 'Name 1',
  image: 'https://picsum.photos/1000',
  category: 'Category 1',
  label: 'Label 1',
  price: '100$',
  description:
    'ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
  featured: true,
  comments: [
    {
      rating: 1,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'Author ',
      date: '2020-04-25T11:16:13.556094Z',
    },
    {
      rating: 1,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'Diana M.',
      date: '2021-01-28T11:16:13.556094Z',
    },
    {
      rating: 3,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'Author2',
      date: '2021-04-25T15:16:13.556094Z',
    },
    {
      rating: 5,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'Author3',
      date: '2020-04-25T11:20:13.556094Z',
    },
    {
      rating: 4,
      comment:
        'Lorem Ipsum is simply dummy text.printer took a galley of type and scramb.ledprinter took a galley of type and scrambled',
      author: 'Author4',
      date: '2021-04-25T11:16:13.556094Z',
    },
    {
      rating: 2,
      comment:
        'printer took a galley of type and scrambled.Lorem Ipsum is simply dummy text',
      author: 'Author5',
      date: '2020-05-25T11:16:13.556094Z',
    },
  ],
};
