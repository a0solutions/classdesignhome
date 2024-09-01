/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  Checkout,
  billing,
  cartProduct,
  order,
  shipping,
} from '../share/services/checkout.service';
import { AlertManage } from '../share/components/alerts/services/alertManage.service';
import { ModalAskManage } from '../share/components/modal-ask/services/modalAskManage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductManage } from '../share/services/product-manage.service';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
  fadeUp5,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
import { urls } from 'src/environments/environment';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
  animations: [fadeLeft, fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4, fadeUp5],
})
export class CheckoutPageComponent implements OnInit {
  order: order = <order>{
    billing: <billing>{},
    shipping: <shipping>{},
  };
  finalOrder: order = <order>{
    billing: <billing>{},
    shipping: <shipping>{},
  };
  processingPayment = false;
  processingPaymentAffirm = false;
  show = false;
  member = '';
  stripe: any;
  url = urls.url;
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private checkout: Checkout,
    private alert: AlertManage,
    private modal: ModalAskManage,
    private route: Router,
    private client: HttpClient,
    private activeRoute: ActivatedRoute,
    private products: ProductManage,
    private seo: SeoService
  ) {
    this.loader.show.next(true);
  }
  async ngOnInit() {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.activeRoute.queryParamMap.subscribe((x) => {
      x.get('response') == 'ok'
        ? this.completeOrder()
        : x.get('response') == 'ko'
        ? this.badPayment()
        : null;
      this.loader.show.next(false);
    });
  }
  badPayment() {
    this.modal.showModalMessage('badPayment');
    this.loader.show.next(false);
    this.modal.answer.subscribe((answer) => {
      answer == 1
        ? this.route.navigate(['products/all'])
        : this.route.navigate(['checkout']);
    });
  }
  insertUser(user: string): void {
    this.order.member = user;
  }
  insertItems(cart: cartProduct[]): void {
    this.order.cartProducts = cart;
  }
  insertForm(form: order): void {
    this.order.billing = form.billing;
    this.order.shipping = form.shipping;
    this.order.member = form.member;
  }
  insertAmount(amount: number): void {
    this.checkout.typeTax.subscribe((x) => {
      this.order.taxes = amount * (x / 100);
      this.order.amount =
        Math.round((amount + this.order.taxes + Number.EPSILON) * 100) / 100;
    });
  }
  insertItemNumber(items: number): void {
    this.order.items = items;
  }
  sendOrder(): void {
    !this.validateData()
      ? this.alert.setAlertMessage('dataCartList')
      : this.createSession();
  }
  sendOrderAffirm(): void {
    !this.validateData()
      ? this.alert.setAlertMessage('dataCartList')
      : this.createSessionAffirm();
  }
  createSession(): void {
    this.processingPayment = true;
    this.order.paymentMethod = 'stripe';
    this.client.post(urls.urlStripe, this.order).subscribe(
      (x: any) => {
        this.order.order = x.description;
        this.checkout.saveTempOrder(this.order);
        this.processingPayment = false;
        window.open(<string>x.url, '_self');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  createSessionAffirm(): void {
    this.processingPaymentAffirm = true;
    this.order.paymentMethod = 'affirm';
    this.client.post(urls.urlAffirm, this.order).subscribe(
      (x: any) => {
        this.order.order = x.description;
        this.checkout.saveTempOrder(this.order);
        this.processingPaymentAffirm = false;
        window.open(<string>x.url, '_self');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  completeOrder(): void {
    this.finalOrder = this.checkout.getTempData();
    this.simplifyOrder();
    this.checkout.sendOrder(this.finalOrder).subscribe(() => {
      this.checkout.deleteAll();
      this.modal.showModalMessage('shopSuccess');
      this.modal.answer.subscribe((answer) => {
        this.loader.show.next(false);
        answer != 0 ? this.killOrder(answer) : null;
      });
    });
  }
  killOrder(answer: number) {
    this.modal.closeModalAsk();
    let route = '';
    answer == 1 ? (route = '/') : 'products/all/';
    this.route.navigate([route]);
  }
  simplifyOrder(): void {
    for (let i = 0; i < this.finalOrder.cartProducts.length; i++) {
      this.finalOrder.cartProducts[i].product =
        this.products.simplifyOrderProduct(
          this.finalOrder.cartProducts[i].product
        );
    }
  }
  validateData(): boolean {
    if (
      this.order.billing.billingName != undefined &&
      this.order.shipping.shippingName != undefined &&
      this.order.cartProducts.length != 0
    )
      return true;
    return false;
  }
}
