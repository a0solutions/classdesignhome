import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ProductManage, product } from '../../services/product-manage.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: product;
  constructor(private http: Router, private products: ProductManage) {}
  navigate(id: string, name: string) {
    window.open('product/' + id + '/' + name, '_blank');
  }
}
