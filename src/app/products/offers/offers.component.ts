import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductManage, product } from '../services/product-manage.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnChanges {
  @Input() category: string = '';
  allProducts: product[] = [];
  constructor(private products: ProductManage) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.allProducts = [];
    this.products.getProductByCategory(this.category).map((x) => {
      this.allProducts.push(x);
    });
  }
}
