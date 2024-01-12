import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { product } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  list: product[] = [];
  subtotal: number = 0;
  constructor(private checkout: Checkout) {}

  ngOnInit() {
    this.checkout.getLocalStorage();
    this.checkout.items.subscribe((x) => {
      this.list = x;
      this.subtotal = 0;
      x.forEach((y) => {
        this.subtotal = this.subtotal + y.price;
      });
    });
  }
  deleteProduct(id: string) {
    this.checkout.deleteProductLocalStorage(id);
  }
}
