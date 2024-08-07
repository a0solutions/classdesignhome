import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavManage } from '../share/components/nav/services/navManage.service';
import {
  ProductManage,
  product,
} from '../share/services/product-manage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { fadeUp7 } from '../share/services/animations';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [fadeUp7],
})
export class ProductDetailComponent implements OnInit {
  reference = '';
  product: product = <product>{};
  category = '';

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
      this.products.setAllProducts().then(() => {
        this.category = <string>(
          this.products.getCategoryById(this.reference)?.category
        );
        this.loader.show.next(false);
      });
    });
  }
}
