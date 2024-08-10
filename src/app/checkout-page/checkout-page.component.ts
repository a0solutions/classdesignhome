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
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
import { urls } from 'src/environments/environment';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
  animations: [fadeLeft, fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4],
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
  show = false;
  member = '';
  stripe: any;
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
        ? this.alert.setAlertMessage('badPayment')
        : null;
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
    this.order.amount = amount;
    this.checkout.typeTax.subscribe((x) => {
      this.order.taxes = amount * (x / 100);
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

  createSession(): void {
    this.processingPayment = true;
    this.client.post(urls.urlStripe, this.order).subscribe(
      (x: any) => {
        this.order.order = x.description;
        this.checkout.saveTempOrder(this.order);
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
    answer == 1 ? (route = '/') : 'products/products/';
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
