import { Component, Input } from '@angular/core';
import { product } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'descripption-accordion',
  templateUrl: './descripption-accordion.component.html',
  styleUrls: ['./descripption-accordion.component.css'],
})
export class DescripptionAccordionComponent {
  @Input() product: product = <product>{};
  constructor() {}
  getBullets(product: string): Array<string[]> {
    if (product != undefined) return JSON.parse(<string>product);
    return [];
  }
}
