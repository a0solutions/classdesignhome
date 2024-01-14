import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductManage, product } from '../../services/product-manage.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnChanges {
  @Input() category: string = '';
  allProducts: product[] = [];
  items: number[] = [];
  constructor(private products: ProductManage) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.allProducts = [];
    this.products.getOfferProduct(this.category).map((x) => {
      this.allProducts.push(x);
      this.items = [];
      for (var i = 1; i <= Math.ceil(this.allProducts.length / 4); i++) {
        this.items.push(i);
      }
    });
  }
}
