import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { NgForm } from '@angular/forms';
import {
  Checkout,
  cartProduct,
  order,
} from '../checkout-page/services/checkout.service';
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
  timeCountDown: string = '';
  showCancel: boolean = true;
  constructor(
    private loader: LoaderService,
    private nav: NavManage,
    private checkout: Checkout,
    private alert: AlertManage,
    private question: ModalAskManage,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
  getTrackinNumber(tracking: NgForm): void {
    this.checkout.getTrackingNumber(tracking.value.trackingNumber).subscribe({
      next: this.printOrder.bind(this),
      error: console.log.bind(this), //this.setAlert.bind(this),
    });
  }
  printOrder(order: object): void {
    let tempOrder = <order>order;
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
    let date = new Date(<string>this.order.date).getTime() + 583631000;
    let now = new Date().getTime();
    let distance = date - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
    this.checkout.cancelOrder(<string>this.order.orderId).subscribe((x) => {
      this.question.closeModalAsk();
      this.setAlert('CanceledOK');
      this.order = <order>{};
    });
  }
}
