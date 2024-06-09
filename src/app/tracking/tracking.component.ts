import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { NgForm } from '@angular/forms';
import {
  Checkout,
  cartProduct,
  order,
} from '../share/services/checkout.service';
import { AlertManage } from '../share/components/alerts/services/alertManage.service';
import { ModalAskManage } from '../share/components/modal-ask/services/modalAskManage.service';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeLeft],
})
export class TrackingComponent implements OnInit {
  order: order = <order>{};
  timeCountDown = '';
  showCancel = true;
  constructor(
    private nav: NavManage,
    private checkout: Checkout,
    private alert: AlertManage,
    private question: ModalAskManage,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setSeo();
    this.nav.dark.next(true);
  }
  getTrackinNumber(tracking: NgForm): void {
    this.checkout.getTrackingNumber(tracking.value.trackingNumber).subscribe({
      next: this.printOrder.bind(this),
      error: console.log.bind(this), //this.setAlert.bind(this),
    });
  }
  printOrder(order: object): void {
    const tempOrder = <order>order;
    order
      ? tempOrder.state == 2
        ? this.setAlert('orderCanceled')
        : this.fillOrder(order)
      : this.setAlert('noTracking');
  }
  fillOrder(order: object): void {
    this.order = <order>order;
    setInterval(() => {
      this.mathTime();
    }, 1000);
    this.order.cartProducts = <cartProduct[]>this.order.cartProducts;
  }
  mathTime(): void {
    const date = new Date(<string>this.order.date).getTime() + 583631000;
    const now = new Date().getTime();
    const distance = date - now;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.timeCountDown =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      this.showCancel = false;
    }
  }
  setAlert(code: string): void {
    this.alert.setAlertMessage(code);
  }

  cancelOrder(): void {
    this.question.showModalMessage('cancelOrder');
    this.question.answer.subscribe((x) => {
      x == 2 ? this.killOrder() : x == 1 ? this.question.closeModalAsk() : null;
    });
  }
  killOrder(): void {
    this.checkout.cancelOrder(<string>this.order.orderId).subscribe(() => {
      this.question.closeModalAsk();
      this.setAlert('CanceledOK');
      this.order = <order>{};
    });
  }
}
