import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductManage } from '../products/services/product-manage.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  headerName: string = '';
  category: string = '';
  constructor(private http: ActivatedRoute, private products: ProductManage) {}
  ngOnInit() {
    this.http.paramMap.subscribe((x) => {
      this.headerName = <string>x.get('name');
    });
    this.category = <string>(
      this.products.getCategory(this.headerName)?.category
    );
  }
}
