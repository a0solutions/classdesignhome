import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { ProductManage, product } from '../../services/product-manage.service';
import { FilterManage } from '../../services/filterManage.service';

@Component({
  selector: 'productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() category: string = '';
  products: product[] = [];
  printProduct: product[] = [];
  itemNumber: number;
  paginateNumber: number = 4;
  more: boolean = false;
  constructor(
    private allProducts: ProductManage,
    private filters: FilterManage
  ) {}

  ngOnInit() {
    this.filters.allFilters.subscribe((x) => {
      this.itemNumber = 4;
      this.products = [];
      this.allProducts.getFilterProducts(x).map((x) => {
        this.products.push(x);
        this.paginate();
      });
    });
  }

  paginate() {
    this.printProduct = this.products.slice(0, this.itemNumber);
    this.itemNumber < this.products.length
      ? (this.more = true)
      : (this.more = false);
  }
  paginateMore() {
    this.itemNumber = this.itemNumber + this.paginateNumber;
    this.paginate();
  }
}
