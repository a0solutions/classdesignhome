import { Component, Input, OnChanges } from '@angular/core';
import { product } from 'src/app/share/services/product-manage.service';

@Component({
  selector: 'app-descripption-accordion',
  templateUrl: './descripption-accordion.component.html',
  styleUrls: ['./descripption-accordion.component.css'],
})
export class DescripptionAccordionComponent implements OnChanges {
  @Input() product: product;
  bullets: string[] = [];
  ngOnChanges() {
    try {
      this.bullets = JSON.parse(<string>this.product.featureBullet);
    } catch {
      if (this.product.featureBullet !== undefined) {
        this.product.featureBullet.split(';').forEach((x) => {
          x != '' ? this.bullets.push(x) : null;
        });
      }
    }
  }
}
