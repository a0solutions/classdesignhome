import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  headerName: string = '';
  constructor(private http: ActivatedRoute) {}
  ngOnInit() {
    this.http.paramMap.subscribe((x) => {
      this.headerName = <string>x.get('name');
    });
  }
}
