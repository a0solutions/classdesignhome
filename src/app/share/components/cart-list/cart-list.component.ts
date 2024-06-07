import { Component } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { product } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  list: product[] = [];
  subtotal: number = 0;
  constructor() {}
}
