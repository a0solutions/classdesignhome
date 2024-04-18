import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { ProductManage } from './services/product-manage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
} from '../share/services/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [fadeUp, fadeLeft, fadeUp1, fadeUp2],
})
export class ProductsComponent implements OnInit {
  category: string = '';
  subcategory: string = '';
  constructor(
    private url: ActivatedRoute,
    private nav: NavManage,
    private allProducts: ProductManage,
    private loader: LoaderService
  ) {}
  ngOnInit(): void {
    this.url.paramMap.subscribe({
      next: this.getCategory.bind(this),
      error: console.log.bind(this),
    });
    this.nav.dark.next(true);
  }
  getCategory(param: ParamMap): void {
    this.allProducts.setAllProducts().then((res) => {
      this.category = <string>param.get('category');
      this.subcategory = <string>param.get('subcategory');
      this.loader.show.next(false);
    });
  }
}
