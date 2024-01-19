import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavManage } from '../share/components/nav/services/navManage.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: string = '';
  category: string = '';
  constructor(private http: ActivatedRoute, private nav: NavManage) {}
  ngOnInit() {
    this.http.paramMap.subscribe((x) => {
      this.id = <string>x.get('id');
    });
    this.nav.dark.next(true);
  }
}
