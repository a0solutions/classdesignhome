import { Component, OnInit } from '@angular/core';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  printProducts: product[] = [];
  product: product[] = <product[]>[];
  constructor(private allProduct: ProductManage) {}

  ngOnInit(): void {
    this.printProducts = this.allProduct.allProducts.filter(
      (x) => x.new || x.membersOnly
    );
  }
}
