import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from 'src/app/share/services/checkout.service';
import { product } from 'src/app/share/services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';
import { urls } from 'src/environments/environment';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() itemCount = 0;
  @Input() product: product;
  @Input() size: boolean;
  @Input() counter = true;
  background = '';
  constructor(
    private chechout: Checkout,
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe
  ) {}
  ngOnInit(): void {
    this.background =
      urls.url +
      'classapi/images/' +
      this.product.category +
      '/products/' +
      this.product.parentRef +
      '/' +
      this.product.sets +
      '/' +
      this.product.color +
      '/1.webp';
    this.background = this.background.replaceAll(' ', '%20');
  }
  numberCount(count: number): void {
    const product: product = this.product;
    this.chechout.upadateProductCart({ product, count });
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spacesDelete(text: string): string {
    return this.spacesPipe.transform(text);
  }
}
