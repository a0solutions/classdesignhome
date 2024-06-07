import { Component, Input, OnInit } from '@angular/core';
import {
  Checkout,
  cartProduct,
} from 'src/app/checkout-page/services/checkout.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from 'src/app/share/services/animations';

@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4],
})
export class ListedComponent implements OnInit {
  printList: cartProduct[] = [];
  subtotal: number = 0;
  show: boolean = false;
  shipping: number = 0;
  typeTax: number = 0;
  taxes: number = (this.shipping + this.subtotal) * (this.typeTax / 100);
  total: number = this.shipping + this.subtotal + this.taxes;

  @Input() size: boolean = false;
  constructor(private checkout: Checkout) {}

  ngOnInit(): void {
    this.checkout.checkCartList() ? (this.show = true) : null;
    this.checkout.items.subscribe({
      next: this.resetProperties.bind(this),
      error: console.log.bind(this),
    });
    this.checkout.typeTax.subscribe((x) => {
      this.typeTax = x;
      this.UpdateCalcAll();
    });
  }
  resetProperties(allItems: cartProduct[]): void {
    allItems.length == 0 ? (this.printList = []) : (this.printList = allItems);
    this.countPrices();
    this.UpdateCalcAll();
  }
  countPrices() {
    this.subtotal = 0;
    this.printList.forEach((x) => {
      this.subtotal = this.subtotal + x.product.price * x.count;
      this.UpdateCalcAll();
    });
  }
  UpdateCalcAll(): void {
    this.taxes = (this.shipping + this.subtotal) * (this.typeTax / 100);
    this.total = this.shipping + this.subtotal + this.taxes;
  }
  deleteAll(): void {
    this.subtotal = 0;
    this.checkout.deleteAll();
  }
}
