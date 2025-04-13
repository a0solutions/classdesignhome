import { Component, Input, OnInit } from '@angular/core';
import {
  Checkout,
  cartProduct,
  discount,
} from 'src/app/share/services/checkout.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from 'src/app/share/services/animations';
import { AlertManage } from '../../alerts/services/alertManage.service';

@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4],
})
export class ListedComponent implements OnInit {
  printList: cartProduct[] = [];
  subtotal = 0;
  show = false;
  showCoupon = false;
  shipping = 0;
  typeTax = 0;
  coupon: discount;
  taxes: number = (this.shipping + this.subtotal) * (this.typeTax / 100);
  total: number = this.shipping + this.subtotal + this.taxes;

  @Input() size = false;
  constructor(private checkout: Checkout, private alerts: AlertManage) {}

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

    this.checkout.coupon.subscribe((x) => {
      this.coupon = x;
      this.showCoupon = true;
      console.log('SIIII');
      this.countPrices();
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
      let price: number;
      x.product.promoPrice == 0
        ? (price = x.product.price)
        : (price = x.product.promoPrice);
      this.subtotal = this.subtotal + price * x.count;
      this.UpdateCalcAll();
    });
  }
  UpdateCalcAll(): void {
    this.taxes = (this.shipping + this.subtotal) * (this.typeTax / 100);
    this.total = this.shipping + this.subtotal + this.taxes;
    if (this.coupon) {
      this.calculateDiscount();
    }
    this.checkout.amount.next(Math.round(this.total * 100) / 100);
    this.checkout.taxes.next(Math.round(this.taxes * 100) / 100);
  }
  calculateDiscount() {
    this.taxes =
      (this.subtotal - this.subtotal * this.coupon.discount + this.shipping) *
      (this.typeTax / 100);
    this.total =
      this.subtotal -
      this.subtotal * this.coupon.discount +
      this.taxes +
      this.shipping;
    this.checkout.discountedAmount.next(
      Math.round(this.subtotal * this.coupon.discount * 100) / 100
    );
  }
  deleteAll(): void {
    this.subtotal = 0;
    this.checkout.deleteAll();
  }
  alertMessage(message: string): void {
    this.alerts.setAlertMessage(message);
  }
}
