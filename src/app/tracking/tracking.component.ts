/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { product } from '../share/services/product-manage.service';
import { CategorySubstrPipe } from '../share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from '../share/pipes/spacesDelete.pipe';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { urls } from 'src/environments/environment';

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
  url: string = urls.url;
  taxes: any;
  constructor(
    private nav: NavManage,
    private checkout: Checkout,
    private alert: AlertManage,
    private question: ModalAskManage,
    private seo: SeoService,
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe,
    private loader: LoaderService
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
    this.getTaxes(tempOrder.shipping.shippingState);
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
    this.question.closeModalAsk();
    this.loader.show.next(true);
    this.checkout.cancelOrder(<string>this.order.orderId).subscribe(() => {
      this.loader.show.next(false);
      this.setAlert('CanceledOK');
      this.order = <order>{};
    });
  }
  getCurrentStatus() {
    if (this.order.delivered) {
      return { title: 'Order delivered', subtitle: '', status: 6 };
    } else if (this.order.canceled) {
      return {
        title: 'Order canceled',
        subtitle:
          'Your order has been canceled. If this cancellation was made in error, please contact us as soon as possible.',
        status: 5,
      };
    } else if (this.order.roadshow) {
      return {
        title: 'The Great American Roadshow',
        subtitle: `Truck Shipping Continental US - "The Great American Roadshow":
                  This final step symbolizes the product's journey across the
                  continent, reaching its final destination. It can be depicted
                  as a vintage or modern truck traveling through iconic American
                  landscapes.`,
        status: 4,
      };
    } else if (this.order.finale) {
      return {
        title: 'The Masterpiece Finale',
        subtitle: ` Quality Control and Packaging in the US - "The Masterpiece
                  Finale": In this stage, each product undergoes a meticulous
                  quality control process, ensuring every detail adheres to the
                  highest standards. It's then elegantly packaged in its final
                  box, symbolizing the culmination of artistry and
                  craftsmanship. This phase could be depicted artistically as a
                  careful and precise final touch in an artist's studio, where
                  the masterpiece is completed and prepared for its grand
                  reveal.`,
        status: 3,
      };
    } else if (this.order.oceanic) {
      return {
        title: 'Oceanic Voyage',
        subtitle: `Shipping Container on Boat - "Oceanic Voyage": This stage
                  represents the journey of the product across the sea,
                  encapsulating the idea of travel and exploration. It could be
                  visualized with a stylized representation of a ship navigating
                  through the waves.`,
        status: 2,
      };
    } else if (this.order.atelier) {
      return {
        title: "The Artisan's Atelier",
        subtitle: `Production - "The Artisan's Atelier": This phase can be
                  visualized as the creative birthplace of the product, where
                  skilled artisans and craftsmen meticulously shape and craft
                  the piece.`,
        status: 1,
      };
    } else {
      return {
        title: 'Order Placed',
        subtitle: `Yout order is confirmed, the shipping confirmation and tracking details
      will be provided shortly`,
        status: 0,
      };
    }
  }
  getImage(product: product): string {
    return (
      urls.url +
      'classapi/images/' +
      product.category.replaceAll(' ', '_') +
      '/products/' +
      this.spaceDatele(product.parentRef) +
      '/' +
      this.substrByCategory(product) +
      '/1.jpg'
    );
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spaceDatele(text: string): string {
    return this.spacesPipe.transform(text);
  }
  getTaxes(state: string): void {
    this.checkout.getTaxes(state).subscribe((x: any) => {
      console.log(x);
      this.taxes = x.taxes;
    });
  }
}
