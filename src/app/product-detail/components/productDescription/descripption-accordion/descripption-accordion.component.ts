import { Component, Input } from '@angular/core';
import { product } from 'src/app/share/services/product-manage.service';

@Component({
  selector: 'app-descripption-accordion',
  templateUrl: './descripption-accordion.component.html',
  styleUrls: ['./descripption-accordion.component.css'],
})
export class DescripptionAccordionComponent {
  @Input() product: product = <product>{};

  getBullets(product: string): Array<string[]> {
    if (product != undefined) {
      try {
        return JSON.parse(<string>product);
      } catch {
        return [product.split(';')];
      }
    }
    return [];
  }
}
