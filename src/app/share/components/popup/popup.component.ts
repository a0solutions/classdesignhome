import {
  ProductManage,
  product,
} from 'src/app/share/services/product-manage.service';
import { popup } from '../headers/popous/popups';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  popup_active = false;
  @Input() data: popup = {
    top: '27',
    left: '50',
    id: '34',
  };
  product: product;
  constructor(private products: ProductManage, private http: Router) {}

  ngOnInit(): void {
    this.product = <product>(
      this.products.allProducts.find((x) => x.id == this.data.id)
    );
  }

  navigate(id: string, name: string): void {
    this.http.navigate(['product/' + id + '/' + name]);
  }
}
