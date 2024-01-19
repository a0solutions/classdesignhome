import { Component, Input, OnInit } from '@angular/core';
import { ProductManage, product } from '../../services/product-manage.service';
import { FilterManage, filter } from '../../services/filterManage.service';

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

  ngOnInit(): void {
    this.filters.allFilters.subscribe({
      next: this.filterProducts.bind(this),
      error: console.log.bind(this),
    });
  }
  filterProducts(filters: filter): void {
    this.itemNumber = 4;
    this.products = [];
    this.allProducts.getFilterProducts(filters).map((x) => {
      this.products.push(x);
      this.paginate();
    });
  }
  paginate(): void {
    this.printProduct = this.products.slice(0, this.itemNumber);
    this.itemNumber < this.products.length
      ? (this.more = true)
      : (this.more = false);
  }
  paginateMore(): void {
    this.itemNumber = this.itemNumber + this.paginateNumber;
    this.paginate();
  }
}
