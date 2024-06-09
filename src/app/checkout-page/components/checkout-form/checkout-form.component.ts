/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Checkout,
  billing,
  order,
  shipping,
} from '../../services/checkout.service';
import { ModalAskManage } from 'src/app/share/components/modal-ask/services/modalAskManage.service';
import { UserManage } from 'src/app/signin/services/user-manage.service';
import { ActivatedRoute } from '@angular/router';
import { countries, states } from 'src/app/share/services/states';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  sameAddressFlag = false;
  shipping: shipping = <shipping>{};
  billing: billing = <billing>{};
  fillOrder: order = <order>{};
  states: string[] = states;
  @Output() formData = new EventEmitter<order>();
  countries: string[] = countries;
  constructor(
    private modal: ModalAskManage,
    private user: UserManage,
    private route: ActivatedRoute,
    private checkout: Checkout
  ) {}
  ngOnInit(): void {
    this.user.isLogged() ? this.showModal() : null;
    this.route.queryParamMap.subscribe((x) => {
      x.get('response') == 'ko' ? this.getDataTemp() : null;
    });
    this.billing.billingState = '';
    this.billing.billingCountry = '';
    this.shipping.shippingCountry = '';
    this.shipping.shippingState = '';
  }
  getDataTemp(): void {
    const order = this.checkout.getTempData();
    this.fillAllBills(order.billing);
    this.isSameAddress(order.billing);
  }
  getTaxes(state: string): void {
    this.checkout.getTaxes(state).subscribe((x: any) => {
      this.checkout.typeTax.next(x.taxes);
    });
  }
  showModal() {
    this.modal.showModalMessage('useDataCheckout');
    this.modal.answer.subscribe((answer) => {
      answer == 2
        ? this.fillAllPersonal()
        : answer != 0
        ? this.modal.show.next(false)
        : null;
      answer != 0 ? this.modal.answer.next(0) : null;
    });
  }

  fillAllPersonal() {
    const id: string = this.user.getUserId();
    this.user.getAllUserInfo(id).subscribe((x: any) => {
      x.billingEmail = x.email;
      x.billingPhone = x.phone;
      this.fillOrder.member = x.id;
      this.fillAllBills(x);
      this.isSameAddress(this.billing);
      this.modal.show.next(false);
    });
  }
  fillAllBills(x: any) {
    this.billing.billingName = x.billingName;
    this.billing.billingSurname = x.billingSurname;
    this.billing.billingEmail = x.billingEmail;
    this.billing.billingPhone = x.billingPhone;
    this.billing.billingAddress = x.billingAddress;
    this.billing.billingAddress2 = x.billingAddress2;
    this.billing.billingZip = x.billingZip;
    this.billing.billingCity = x.billingCity;
    this.billing.billingState = x.billingState;
    this.billing.billingCountry = x.billingCountry;
    this.getTaxes(x.billingState);
  }
  sameAddress(billing: billing): void {
    !this.sameAddressFlag
      ? this.isSameAddress(billing)
      : this.isNotSameAddress();
    this.sameAddressFlag = !this.sameAddressFlag;
  }
  isSameAddress(billing: billing): void {
    this.shipping.shippingName = billing.billingName;
    this.shipping.shippingSurname = billing.billingSurname;
    this.shipping.shippingAddress = billing.billingAddress;
    this.shipping.shippingAddress2 = billing.billingAddress2;
    this.shipping.shippingCity = billing.billingCity;
    this.shipping.shippingZip = billing.billingZip;
    this.shipping.shippingState = billing.billingState;
    this.shipping.shippingCountry = billing.billingCountry;
    this.getTaxes(billing.billingState);
    this.sendOrder();
  }
  isNotSameAddress(): void {
    this.shipping = <shipping>{};
  }
  listenForm(form: NgForm): void {
    form.valid ? this.sendOrder() : null;
  }
  sendOrder(): void {
    this.fillOrder.billing = this.billing;
    this.fillOrder.shipping = this.shipping;
    this.formData.emit(this.fillOrder);
  }
}
