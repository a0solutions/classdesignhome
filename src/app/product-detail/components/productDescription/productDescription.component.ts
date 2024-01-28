import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'productDescription',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  @Input() id: string = '';
  count: number = 1;
  colors: string[] = ['green'];
  product: product = <product>{};
  constructor(private products: ProductManage, private checkout: Checkout) {}

  ngOnInit() {
    this.products.getProduct(this.id).forEach((x) => {
      this.product = x;
      this.products.getProductByCategory(this.product.category).forEach((y) => {
        this.colors.includes(y.color) ? null : this.colors.push(y.color);
      });
    });
  }
  updateFilterColor(color: any) {}
  addCart(product: product) {
    this.checkout.postLocalStorage(product, this.count);
  }
  setNumber(event: number) {
    this.count = event;
  }
}
