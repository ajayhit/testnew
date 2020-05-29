import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input() products: Product[];
  @Output() selectionChanged = new EventEmitter();
  selectedProduct: Product;
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
   // this.products = this.ps.products;
  }
  selectProduct(event, id) {
    this.setActiveLink(event);
    this.selectedProduct = this.products.find((x) => x.id === id);
    this.selectionChanged.emit(this.selectedProduct);
  }

  setActiveLink(event) {
    document.querySelectorAll('.item').forEach((element) => {
      element.classList.remove('active');
    });
    event.target.setAttribute('class', 'item active');
  }
}
