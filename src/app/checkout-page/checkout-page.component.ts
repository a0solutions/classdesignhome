import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  Checkout,
  billing,
  cartProduct,
  order,
  shipping,
} from './services/checkout.service';
import { NgForm } from '@angular/forms';
import { AlertManage } from '../share/components/alerts/services/alertManage.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  order: order = <order>{ billing: <billing>{}, shipping: <shipping>{} };
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private checkout: Checkout,
    private alert: AlertManage
  ) {}
  ngOnInit(): void {
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
  insertItems(cart: cartProduct[]): void {
    this.order.carProducts = cart;
  }
  insertForm(form: order): void {
    this.order.billing = form.billing;
    this.order.shipping = form.shipping;
  }
  sendOrder(): void {
    !this.validateData() ? this.alert.setAlertMessage('dataCartList') : null;
  }
  validateData(): boolean {
    console.log(this.order.billing.billingName);
    if (
      this.order.billing.billingName != undefined &&
      this.order.shipping.shippingName != undefined &&
      this.order.carProducts.length != 0
    )
      return true;
    return false;
  }
}
