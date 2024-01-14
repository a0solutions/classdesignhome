import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route } from '@angular/router';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.css'],
})
export class ListedComponent implements OnInit {
  list: product[] = [];
  subtotal: number = 0;
  show: boolean = false;
  shipping: number = 0;
  total: number = this.shipping + this.subtotal;
  @Input() size: boolean = false;
  constructor(private checkout: Checkout, private products: ProductManage) {}

  ngOnInit() {
    this.checkout.checkCartList() ? (this.show = true) : null;
    this.checkout.items.subscribe((x) => {
      this.subtotal = 0;
      this.list = [];
      x.forEach((y) => {
        let product = <product>this.products.getProduct(y);
        this.list.push(product);
        this.subtotal = this.subtotal + product.price;
      });
    });
  }
  deleteProduct(id: string) {
    this.checkout.deleteProductLocalStorage(id);
  }
}
