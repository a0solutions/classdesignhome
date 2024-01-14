import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { FilterManage } from 'src/app/products/services/filterManage.service';
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
  colors: string[] = ['green'];
  product: product = {
    id: '40',
    name: 'Cup Cabinets',
    dimentions: 'VC 67CM X 60CM X 80CM ',
    reference: 'REF. 33722',
    category: 'living',
    subcategory: 'Dinig Table',
    price: 1350,
    color: 'green',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
    metadescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
    stock: true,
    new: true,
    offer: false,
    membersOnly: true,
  };
  constructor(
    private products: ProductManage,
    private http: ActivatedRoute,
    private checkout: Checkout
  ) {}

  ngOnInit() {
    this.http.paramMap.subscribe((x) => {
      let id = x.get('id');
      this.product = <product>this.products.getProduct(<string>id);
    });

    this.products.getProductByCategory(this.product.category).forEach((y) => {
      this.colors.includes(y.color) ? null : this.colors.push(y.color);
    });
  }
  updateFilterColor(color: any) {}
  addCart(product: product, count: string) {
    this.checkout.postLocalStorage(product.id, parseInt(count));
  }
}
