import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  Checkout,
  cartProduct,
} from '../../../share/services/checkout.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from 'src/app/share/services/animations';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4],
})
export class ProductCheckoutComponent implements OnInit {
  list = 0;
  subtotal = 0;
  @Output() cartItems = new EventEmitter<cartProduct[]>();
  @Output() amount = new EventEmitter<number>();
  @Output() items = new EventEmitter<number>();
  constructor(private checkout: Checkout) {}

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
      let price: number;
      y.product.promoPrice == 0
        ? (price = y.product.price)
        : (price = y.product.promoPrice);
      this.subtotal = this.subtotal + price * y.count;
      this.amount.emit(this.subtotal);
      this.items.emit(this.list);
    });
  }
}
