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

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  sameAddressFlag: boolean = false;
  shipping: shipping = <shipping>{};
  billing: billing = <billing>{};
  fillOrder: order = <order>{};
  @Output() formData = new EventEmitter<order>();
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
  }
  getDataTemp(): void {
    let order = this.checkout.getTempData();
    console.log(order);
    this.fillAllBills(order.billing);
    this.isSameAddress(order.billing);
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
    let id: string = this.user.getUserId();
    this.user.getAllUserInfo(id).subscribe((x: any) => {
      x.billingEmail = x.email;
      x.billingPhone = x.phone;
      this.fillAllBills(x);
      this.isSameAddress(this.billing);
      this.modal.show.next(false);
    });
  }
  fillAllBills(x: any) {
    console.log(x.billingName);
    this.billing.billingName = x.billingName;
    this.billing.billingSurname = x.billingSurname;
    this.billing.billingEmail = x.billingEmail;
    this.billing.billingPhone = x.billingPhone;
    this.billing.billingAddress = x.billingAddress;
    this.billing.billingAddress2 = x.billingAddress2;
    this.billing.billingZip = x.billingZip;
    this.billing.billingCity = x.billingCity;
    this.billing.billingCountry = x.billingCountry;
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
    this.shipping.shippingCountry = billing.billingCountry;
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
