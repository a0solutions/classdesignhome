import { Component, Input } from '@angular/core';
import { product } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css'],
})
export class PersonalCardComponent {
  @Input() product: product = <product>{};
  constructor() {}
}
