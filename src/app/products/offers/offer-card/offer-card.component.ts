import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../services/product-manage.service';

@Component({
  selector: 'offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent implements OnInit {
  @Input() product: product;
  constructor() {}

  ngOnInit() {}
  navigate(id: string, name: string) {
    window.open('product/' + id + '/' + name, '_blank');
  }
}
