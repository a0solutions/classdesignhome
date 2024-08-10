import { Component, Input, OnInit } from '@angular/core';
import { Checkout, order } from 'src/app/share/services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/share/services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';
import { urls } from 'src/environments/environment';
import { ModalAskManage } from 'src/app/share/components/modal-ask/services/modalAskManage.service';
import { LoaderService } from 'src/app/share/components/loader/services/loader.service';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { fade } from 'src/app/share/services/animations';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css'],
  animations: [fade],
})
export class PersonalCardComponent implements OnInit {
  @Input() order: order;
  url: string = urls.url;
  timeCountDown: string;
  showCancel = true;
  extraInfo = false;
  constructor(
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe,
    private checkout: Checkout,
    private productService: ProductManage,
    private question: ModalAskManage,
    private loader: LoaderService,
    private alert: AlertManage
  ) {}
  ngOnInit(): void {
    this.mathTime();
    console.log(this.order);
  }
  getImageUrl(product: product): string {
    const background =
      urls.url +
      'classapi/images/' +
      product.category +
      '/products/' +
      product.parentRef +
      '/' +
      product.sets +
      '/' +
      product.color +
      '/1.webp';
    return background;
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spaceDatele(text: string): string {
    return this.spacesPipe.transform(text);
  }
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name, '_blank');
  }
  getStatus(order: order): string {
    let status = 'Placed';
    if (order.canceled != null) {
      status = 'Canceled';
    } else if (order.delivered != null) {
      status = 'Delivered';
    } else if (order.roadshow != null) {
      status = 'Traveling';
    } else if (order.finale != null) {
      status = 'Traveling';
    } else if (order.oceanic != null) {
      status = 'Traveling';
    } else if (order.atelier != null) {
      status = 'Traveling';
    }
    return status;
  }
  buyAgain(productId: string) {
    this.productService.getProduct(productId).subscribe((x) => {
      this.checkout.postLocalStorage(x, 1);
    });
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
      this.order.canceled = Date();
      this.showCancel = false;
    });
  }
  setAlert(code: string): void {
    this.alert.setAlertMessage(code);
  }
}
