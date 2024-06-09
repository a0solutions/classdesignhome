import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Checkout,
  order,
} from 'src/app/checkout-page/services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css'],
})
export class PersonalCardComponent implements OnInit {
  @Input() order: order;
  url: string = urls.url;
  constructor(
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe,
    private checkout: Checkout,
    private products: ProductManage,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log(this.order);
  }
  getImageUrl(product: product): string {
    const background =
      urls.url +
      'classapi/images/' +
      product.category.replaceAll(' ', '_') +
      '/products/' +
      this.spaceDatele(product.parentRef) +
      '/' +
      this.substrByCategory(product) +
      '/1.jpg';
    return background;
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spaceDatele(text: string): string {
    return this.spacesPipe.transform(text);
  }
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name.replaceAll(' ', '_'), '_blank');
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
  buyAgain() {
    for (let i = 0; i < this.order.cartProducts.length; i++) {
      this.products
        .getProduct(this.order.cartProducts[i].product.reference)
        .subscribe((y) => {
          this.checkout.postLocalStorage(y, this.order.cartProducts[i].count);
        });
    }
    this.router.navigate(['/checkout']);
  }
}
