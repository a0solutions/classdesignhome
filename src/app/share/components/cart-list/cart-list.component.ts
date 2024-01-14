import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  list: product[] = [];
  subtotal: number = 0;
  show: boolean = false;
  constructor(private checkout: Checkout, private products: ProductManage) {}

  ngOnInit() {}
  answerCart(event: boolean) {
    event ? this.checkout.setNewTime() : this.checkout.deleteAll();
    this.show = false;
  }
}
