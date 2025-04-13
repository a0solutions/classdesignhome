/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  Checkout,
  billing,
  cartProduct,
  discount,
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
  fadeUp6,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
import { urls } from 'src/environments/environment';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
  animations: [
    fadeLeft,
    fadeUp,
    fadeUp1,
    fadeUp2,
    fadeUp3,
    fadeUp4,
    fadeUp5,
    fadeUp6,
  ],
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
  coupon: discount;
  processingPayment = false;
  processingPaymentAffirm = false;
  processingPaymentPayPal = false;
  show = false;
  member = '';
  stripe: any;
  paypalVerified = false;
  url = urls.url;

  public payPalConfig?: IPayPalConfig;

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
  ngOnInit() {
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
    this.checkout.coupon.subscribe((x) => {
      this.coupon = x;
      this.order.discount = x.discount;
      this.order.coupon = x.coupon;
    });
  }
  verifyPaypalData() {
    !this.validateData()
      ? this.alert.setAlertMessage('dataCartList')
      : (this.paypalVerified = true);
    this.paypalVerified ? this.initConfig() : null;
  }
  initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'AUaZFEy4RkMMQphPcLwHikILllhU8BECCA31NMke6FHG9N1wkw7y-kVdK6yvOoGPH8neaRyRtC4hktDR',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: this.order.amount.toString(),
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: this.order.amount.toString(),
                  },
                },
              },
              items: [
                {
                  name: 'Class Design Home Products',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: this.order.amount.toString(),
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        this.order.order = data.id;
        this.order.paymentMethod = 'paypal';
        this.checkout.saveTempOrder(this.order);
        this.route.navigate(['checkout'], {
          queryParams: { response: 'ok' },
        });
      },
      onCancel: (data, actions) => {
        this.badPayment();
      },
      onError: (err) => {
        this.badPayment();
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log(data);
        console.log(actions);
      },
    };
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
    this.checkout.amount.subscribe((x) => {
      this.order.amount = x;
    });
    this.checkout.taxes.subscribe((x) => {
      this.order.taxes = x;
    });
    this.checkout.discountedAmount.subscribe((x) => {
      this.order.discountAmount = x;
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
    setTimeout(() => {
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
    }, 1000);
  }
  killOrder(answer: number) {
    this.modal.answer.next(0);
    this.modal.closeModalAsk();
    let route = '';
    answer == 1 ? (route = '/') : (route = 'products/all/');
    window.location.href = route;
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
    console.log(this.order);
    if (
      this.order.billing.billingName != undefined &&
      this.order.shipping.shippingName != undefined &&
      this.order.cartProducts.length != 0
    )
      return true;
    return false;
  }
}
