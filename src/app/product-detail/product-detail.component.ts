import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductManage } from '../products/services/product-manage.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: string = '';
  category: string = '';
  constructor(private http: ActivatedRoute, private products: ProductManage) {}
  ngOnInit() {
    this.http.paramMap.subscribe((x) => {
      this.id = <string>x.get('id');
    });
  }
}
