import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Checkout,
  billing,
  order,
  shipping,
} from '../../services/checkout.service';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  sameAddressFlag: boolean = false;
  shipping: shipping = <shipping>{};
  billing: billing = <billing>{};
  fillOrder: order = <order>{};
  @Output() formData = new EventEmitter<order>();
  constructor(private checkout: Checkout) {}

  sameAddress(billing: NgForm): void {
    !this.sameAddressFlag
      ? this.isSameAddress(billing)
      : this.isNotSameAddress();
    this.sameAddressFlag = !this.sameAddressFlag;
  }
  isSameAddress(billing: NgForm): void {
    this.shipping.shippingName = billing.value.billingName;
    this.shipping.shippingSurname = billing.value.billingSurname;
    this.shipping.shippingAddress = billing.value.billingAddress;
    this.shipping.shippingAddress2 = billing.value.billingAddress2;
    this.shipping.shippingCity = billing.value.billingCity;
    this.shipping.shippingCountry = billing.value.billingCountry;
    this.sendOrder();
  }
  isNotSameAddress(): void {
    this.shipping = <shipping>{};
  }
  listenForm(form: NgForm, formName: string): void {
    form.valid ? this.sendOrder() : null;
  }
  sendOrder(): void {
    this.fillOrder.billing = this.billing;
    this.fillOrder.shipping = this.shipping;
    this.formData.emit(this.fillOrder);
  }
}
