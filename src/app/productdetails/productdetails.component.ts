import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() product: Product;
  @Output() handleClose = new EventEmitter();
  @Output() handleUpdate = new EventEmitter<Product>();

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.handleClose.emit(true);
  }

  onUpdate() {
    this.handleUpdate.emit(this.product);
  }
}
