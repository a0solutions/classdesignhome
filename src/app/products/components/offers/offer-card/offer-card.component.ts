import { Component, Input } from '@angular/core';
import { product } from '../../../services/product-manage.service';

@Component({
  selector: 'offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  @Input() product: product;
  constructor() {}
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name, '_blank');
  }
}
