import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product: product;
  @Input() size: boolean;
  @Output() deleteProduct = new EventEmitter<string>();
  constructor() {}
  deleteProductEmit(id: string) {
    this.deleteProduct.emit(id);
  }
}
