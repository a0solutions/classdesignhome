import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  sameAddressFlag: boolean = false;
  shipping: shipping = <shipping>{};
  constructor() {}

  ngOnInit() {}
  submit(form: any) {}
  sameAddress(billing: NgForm) {
    !this.sameAddressFlag
      ? this.isSameAddress(billing)
      : this.isNotSameAddress();
    this.sameAddressFlag = !this.sameAddressFlag;
  }
  isSameAddress(billing: NgForm) {
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
  isNotSameAddress() {
    this.shipping = {
      name: '',
      surname: '',
      address: '',
      address2: '',
      city: '',
      zip: '',
      country: '',
    };
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
