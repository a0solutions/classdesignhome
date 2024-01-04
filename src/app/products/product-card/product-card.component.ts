import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: product;
  constructor() {}
}
type product = {
  id: string;
  name: string;
  dimentions: string;
  reference: string;
  category: string;
  price: number;
};
