import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  @Input() products: Product[];
  selectedProduct: Product;
  selectedProductForUpdate: Product;

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {}

  handleSelectionChange(product) {
    this.selectedProduct = product;
    this.selectedProductForUpdate = null;
  }

  onClose(flag) {
    if (flag) {
      this.selectedProduct = null;
    }
  }

  onUpdateClose(flag) {
    if (flag) {
      this.selectedProductForUpdate = null;
    }
  }

  onUpdate(product) {
    this.selectedProductForUpdate = product;
  }
}
