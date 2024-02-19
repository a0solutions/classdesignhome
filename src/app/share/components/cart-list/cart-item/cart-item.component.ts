import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { product } from 'src/app/products/services/product-manage.service';

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
  constructor(private chechout: Checkout) {}
  ngOnInit(): void {
    this.background =
      'http://localhost/classapi/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.product.reference.substr(0, 9).replaceAll(' ', '') +
      '/' +
      this.product.reference.substr(0, 9).replaceAll(' ', '') +
      '.jpg';
  }
  numberCount(count: number): void {
    let product: product = this.product;
    this.chechout.upadateProductCart({ product, count });
  }
}
