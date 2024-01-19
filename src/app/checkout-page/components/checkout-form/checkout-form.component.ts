import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  sameAddressFlag: boolean = false;
  shipping: shipping = <shipping>{};
  constructor() {}

  sameAddress(billing: NgForm): void {
    !this.sameAddressFlag
      ? this.isSameAddress(billing)
      : this.isNotSameAddress();
    this.sameAddressFlag = !this.sameAddressFlag;
  }
  isSameAddress(billing: NgForm): void {
    this.shipping = {
      name: billing.value.name,
      surname: billing.value.surname,
      address: billing.value.address,
      address2: billing.value.address2,
      city: billing.value.city,
      zip: billing.value.zip,
      country: billing.value.country,
    };
  }
  isNotSameAddress(): void {
    this.shipping = <shipping>{};
  }
}

type shipping = {
  name: string;
  surname: string;
  address: string;
  address2: string;
  city: string;
  zip: string;
  country: string;
};
