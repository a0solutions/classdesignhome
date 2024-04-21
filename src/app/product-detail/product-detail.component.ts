import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavManage } from '../share/components/nav/services/navManage.service';
import {
  CategoriesService,
  categories,
} from '../share/services/categories.service';
import {
  ProductManage,
  product,
} from '../products/services/product-manage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { SeoService } from '../share/services/seo.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  reference: string = '';
  product: product = <product>{};
  category: string = '';
  constructor(
    private http: ActivatedRoute,
    private nav: NavManage,
    private products: ProductManage,
    private loader: LoaderService
  ) {}
  ngOnInit(): void {
    this.nav.dark.next(true);
    this.http.paramMap.subscribe((x) => {
      this.reference = <string>x.get('id');
      this.products.getProduct(this.reference).subscribe((x) => {
        this.product = x;
      });
      this.products.setAllProducts().then((x) => {
        this.category = <string>(
          this.products.getCategoryById(this.reference)?.category
        );
        this.loader.show.next(false);
      });
    });
  }
}
