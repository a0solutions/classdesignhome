import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    this.url.paramMap.subscribe((x) => {
      this.category = <string>x.get('category');
      this.subcategory = <string>x.get('subcategory');
      this.loader = false;
    });
  }
}
