import { Component, Input, OnInit } from '@angular/core';
import {
  Checkout,
  cartProduct,
} from 'src/app/checkout-page/services/checkout.service';
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
  printList: cartProduct[] = [];
  subtotal: number = 0;
  show: boolean = false;
  shipping: number = 0;
  total: number = this.shipping + this.subtotal;
  @Input() size: boolean = false;
  constructor(private checkout: Checkout, private products: ProductManage) {}

  ngOnInit(): void {
    this.checkout.checkCartList() ? (this.show = true) : null;
    this.checkout.items.subscribe({
      next: this.resetProperties.bind(this),
      error: console.log.bind(this),
    });
  }
  resetProperties(allItems: cartProduct[]): void {
    allItems.length == 0 ? (this.printList = []) : (this.printList = allItems);
    this.countPrices();
  }
  countPrices() {
    this.subtotal = 0;
    this.printList.forEach((x) => {
      this.subtotal = this.subtotal + x.product.price * x.count;
    });
  }
}
