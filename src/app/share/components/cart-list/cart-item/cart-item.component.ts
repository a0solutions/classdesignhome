import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { product } from 'src/app/products/services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() itemCount: number = 0;
  @Input() product: product;
  @Input() size: boolean;
  background: string = '';
  constructor(
    private chechout: Checkout,
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe
  ) {}
  ngOnInit(): void {
    this.background =
      'http://localhost/classapi/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.spacesDelete(this.product.parentRef) +
      '/' +
      this.substrByCategory(this.product).replaceAll(' ', '') +
      '/1.jpg';
  }
  numberCount(count: number): void {
    let product: product = this.product;
    this.chechout.upadateProductCart({ product, count });
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spacesDelete(text: string): string {
    return this.spacesPipe.transform(text);
  }
}
