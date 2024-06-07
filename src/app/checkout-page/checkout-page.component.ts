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
import { AlertManage } from '../share/components/alerts/services/alertManage.service';
import { ModalAskManage } from '../share/components/modal-ask/services/modalAskManage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { urls } from '../share/services/apiurl';
import { ProductManage } from '../products/services/product-manage.service';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
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
  processingPayment: boolean = false;
  show: boolean = false;
  member: string = '';
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
  ) {}
  async ngOnInit() {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.loader.show.next(false);
    this.activeRoute.queryParamMap.subscribe((x) => {
      x.get('response') == 'ok'
        ? this.completeOrder()
        : x.get('response') == 'ko'
        ? this.alert.setAlertMessage('badPayment')
        : null;
    });
    console.log(this.order);
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
    this.checkout.sendOrder(this.finalOrder).subscribe((x) => {
      this.modal.showModalMessage('shopSuccess');
      this.modal.answer.subscribe((answer) => {
        answer == 1
          ? this.route.navigate(['/'])
          : answer == 2
          ? this.route.navigate(['products/products'])
          : null;
        answer != 0 ? this.modal.closeModalAsk() : null;
      });
      this.checkout.deleteAll();
    });
  }
  simplifyOrder(): void {
    this.finalOrder.cartProducts.forEach((x) => {
      x.product = this.products.simplifyOrderProduct(x.product);
    });
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
