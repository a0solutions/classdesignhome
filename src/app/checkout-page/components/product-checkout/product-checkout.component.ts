import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Checkout, cartProduct } from '../../services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css'],
})
export class ProductCheckoutComponent implements OnInit {
  list: number = 0;
  subtotal: number = 0;
  @Output() cartItems = new EventEmitter<cartProduct[]>();
  constructor(private checkout: Checkout, private products: ProductManage) {}

  ngOnInit(): void {
    this.checkout.items.subscribe({
      next: this.getCartListItems.bind(this),
      error: console.log.bind(this),
    });
  }
  getCartListItems(allItems: cartProduct[]): void {
    this.subtotal = 0;
    this.list = 0;
    allItems.forEach((y) => {
      this.list = this.list + y.count;
      this.products.getProduct(y.product.id).forEach((x) => {
        let product = x;
        this.subtotal = this.subtotal + product.price;
      });
    });
    this.cartItems.emit(allItems);
  }
}
