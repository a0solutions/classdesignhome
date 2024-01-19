import { Component, Input } from '@angular/core';
import { product } from '../../services/product-manage.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: product;
  constructor() {}
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name, '_blank');
  }
}
