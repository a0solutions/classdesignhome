import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Checkout, cartProduct } from '../../services/checkout.service';
import { ProductManage } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css'],
})
export class ProductCheckoutComponent implements OnInit {
  list: number = 0;
  subtotal: number = 0;
  @Output() cartItems = new EventEmitter<cartProduct[]>();
  @Output() amount = new EventEmitter<number>();
  @Output() items = new EventEmitter<number>();
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
    this.cartItems.emit(allItems);
    allItems.forEach((y) => {
      this.list = this.list + y.count;
      this.subtotal = this.subtotal + y.product.price * y.count;
      this.amount.emit(this.subtotal);
      this.items.emit(this.list);
    });
  }
}
