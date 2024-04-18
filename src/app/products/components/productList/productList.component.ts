import { Component, Input, OnInit } from '@angular/core';
import { ProductManage, product } from '../../services/product-manage.service';
import { FilterManage, filter } from '../../services/filterManage.service';
import { fadeUp } from 'src/app/share/services/animations';

@Component({
  selector: 'productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  animations: [fadeUp],
})
export class ProductListComponent implements OnInit {
  @Input() category: string = '';
  products: product[] = [];
  printProduct: product[] = [];
  itemNumber: number;
  paginateNumber: number = 21;
  more: boolean = false;
  parents: string[] = [];
  cardSize: string = 'col-lg-4';
  constructor(
    private allProducts: ProductManage,
    private filters: FilterManage
  ) {}

  ngOnInit(): void {
    this.filters.allFilters.subscribe({
      next: this.filterProducts.bind(this),
      error: console.log.bind(this),
    });
    this.filters.cardSize.subscribe((x) => {
      this.cardSize = x;
    });
  }
  filterProducts(filters: filter): void {
    this.itemNumber = this.paginateNumber;
    this.products = [];
    this.parents = [];
    this.allProducts.getFilterProducts(filters).map((x) => {
      if (!this.parents.includes(x.parentRef)) {
        this.parents.push(x.parentRef);
        this.products.push(x);
        this.allProducts.filterProducts.next(this.products.length);
        this.paginate();
      }
    });
  }
  paginate(): void {
    this.printProduct = this.products.slice(0, this.itemNumber);
    this.allProducts.showedProducts.next(this.printProduct.length);
    this.itemNumber < this.products.length
      ? (this.more = true)
      : (this.more = false);
  }
  paginateMore(): void {
    this.itemNumber = this.itemNumber + this.paginateNumber;
    this.paginate();
  }
}
