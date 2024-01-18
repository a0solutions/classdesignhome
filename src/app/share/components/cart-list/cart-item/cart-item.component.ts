import { Component, Input } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { product } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() itemCount: number = 0;
  @Input() product: product;
  @Input() size: boolean;
  constructor(private chechout: Checkout) {}
  deleteProductEmit(id: string) {
    this.chechout.deleteAllProductsId(id);
  }
  numberCount(event: number) {
    this.chechout.updateCart(event, this.product.id);
  }
}
