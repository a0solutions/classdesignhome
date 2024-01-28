import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { ProductManage } from './services/product-manage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  category: string = '';
  subcategory: string = '';
  loader: boolean = true;
  constructor(
    private url: ActivatedRoute,
    private nav: NavManage,
    private allProducts: ProductManage
  ) {}

  ngOnInit(): void {
    this.url.paramMap.subscribe({
      next: this.getCategory.bind(this),
      error: console.log.bind(this),
    });
    this.nav.dark.next(false);
  }
  getCategory(param: ParamMap): void {
    this.allProducts.setAllProducts().then((res) => {
      this.category = <string>param.get('category');
      this.subcategory = <string>param.get('subcategory');
      this.loader = false;
    });
  }
}
