import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  category: string = '';
  subcategory: string = '';
  loader: boolean = true;
  constructor(private url: ActivatedRoute) {}

  ngOnInit() {
    this.url.paramMap.subscribe({
      next: this.getCategory.bind(this),
      error: console.log.bind(this),
    });
  }
  getCategory(param: ParamMap) {
    this.category = <string>param.get('category');
    this.subcategory = <string>param.get('subcategory');
    this.loader = false;
  }
}
