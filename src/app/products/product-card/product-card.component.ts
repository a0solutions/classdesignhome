import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: product;
  constructor(private http: Router) {}
  navigate(id: string, name: string) {
    window.open('product/' + id + '/' + name, '_blank');
  }
}
type product = {
  id: string;
  name: string;
  dimentions: string;
  reference: string;
  category: string;
  price: number;
};
