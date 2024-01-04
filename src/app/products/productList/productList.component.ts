import { Component, Input, OnInit } from '@angular/core';
import { ProductManage, product } from '../services/product-manage.service';
import { FilterManage } from '../services/filterManage.service';

@Component({
  selector: 'productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() category: string = '';
  products: product[] = [];
  constructor(
    private allProducts: ProductManage,
    private filters: FilterManage
  ) {}

  ngOnInit() {
    this.filters.allFilters.subscribe((x) => {
      this.products = [];
      this.allProducts.getFilterProducts(x).map((x) => {
        this.products.push(x);
      });
    });
  }
}
