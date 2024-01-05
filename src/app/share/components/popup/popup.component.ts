import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';
import { popup } from '../headers/popous/popups';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  popup_active: boolean = false;
  @Input() data: popup = {
    top: '',
    left: '',
    id: '',
  };
  product: product;
  constructor(private products: ProductManage) {}

  ngOnInit() {
    this.product = <product>(
      this.products.allProducts.find((x) => x.id == this.data.id)
    );
  }
  hoverproducts(nth: boolean) {
    this.popup_active = !this.popup_active;
  }
}
