import { Injectable, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Input() products: Product[];
  @Output() selectionChanged = new EventEmitter();
  selectedProduct: Product;
  constructor() {
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
  selectProduct(event, id) {
   // this.setActiveLink(event);
    this.selectedProduct = this.products.find(x => x.id === id);
    this.selectionChanged.emit(this.selectedProduct);
  }
}
