import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import {
  product,
  ProductManage,
} from 'src/app/share/services/product-manage.service';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import { urls } from 'src/environments/environment';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent implements OnInit {
  @Input() product: product;
  background: string;
  like: boolean;
  dealType: string;
  constructor(
    private products: ProductManage,
    private token: TokenManage,
    private alert: AlertManage,
    private route: Router
  ) {}

  ngOnInit() {
    this.background = encodeURI(
      urls.url +
        'classapi/images/' +
        this.product.category +
        '/products/' +
        this.product.parentRef +
        '/' +
        this.product.sets +
        '/' +
        this.product.color +
        '/1.webp'
    );
    this.dealType = this.products.getDeal(this.product);
  }
  shareProduct(event: Event, arg1: string, arg2: string) {
    const url =
      'whatsapp://send?text=Look at this awesome thing I found!: ' +
      urls.url +
      'product/' +
      arg1 +
      '/' +
      arg2.replaceAll(' ', '_');
    event.preventDefault();
    event.stopPropagation();
    location.assign(url);
  }
  addProductLikes(ref: string): void {
    if (this.token.isLogged.value) {
      this.products.postLikes(ref).subscribe((x) => {
        this.like = !this.like;
      });
    } else {
      this.alert.setAlertMessage('isLogOut');
    }
  }
  navigate(product: product) {
    this.route.navigate(['/product/' + product.reference + '/' + product.name]);
  }
}
