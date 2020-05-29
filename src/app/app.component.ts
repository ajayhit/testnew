import { Product } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Pencil',
        description: 'Use this to write your story',
        price: 250,
        owner: 'Tpoaz Corp',
        color: 'black',
        quantity: 750,
        inStock: false,
      },
      {
        id: 2,
        name: 'Hammer',
        description: 'Hammer description',
        price: 100,
        owner: 'Stark Corp',
        color: 'red',
        quantity: 750,
        inStock: true,
      },
      {
        id: 3,
        name: 'Nails',
        description: 'Nails description',
        price: 100,
        owner: 'Nails Corp',
        color: 'silver',
        quantity: 10000,
        inStock: true,
      },
      {
        id: 4,
        name: 'Pen',
        description: 'Pen description',
        price: 100,
        owner: 'Pen Corp',
        color: 'blue',
        quantity: 20,
        inStock: false,
      },
      {
        id: 4,
        name: 'Notebook',
        description: 'Notebook description',
        price: 200,
        owner: 'Notebook Corp',
        color: 'white',
        quantity: 1450,
        inStock: false,
      },
    ];
  }
}
