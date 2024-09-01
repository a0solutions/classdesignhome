import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ProductManage,
  product,
} from '../../../share/services/product-manage.service';
import {
  FilterManage,
  filter,
} from '../../../share/services/filterManage.service';
import { fadeUp } from 'src/app/share/services/animations';
import { Subscription } from 'rxjs';
import { SortService } from 'src/app/share/services/sort-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  animations: [fadeUp],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() category = '';
  products: product[] = [];
  printProduct: product[] = [];
  itemNumber: number;
  paginateNumber = 24;
  more = false;
  parents: string[] = [];
  cardSize = 'col-lg-4';
  cardSizeSubscription: Subscription;
  open = false;
  constructor(
    private allProducts: ProductManage,
    private filters: FilterManage,
    private sortService: SortService,
    private filter: FilterManage
  ) {}
  ngOnDestroy(): void {
    this.cardSizeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.filters.allFilters.subscribe({
      next: this.filterProducts.bind(this),
      error: console.log.bind(this),
    });
    this.cardSizeSubscription = this.filters.cardSize.subscribe((x) => {
      this.cardSize = x;
    });

    this.filter.isInFilter.subscribe((x) => {
      x ? (this.open = true) : (this.open = false);
    });
  }

  sortProducts(): void {
    this.sortService.sortList.subscribe((x) => {
      if (x === 'priceasc') {
        this.products = this.sortService.sortPriceAsc(this.products);
      } else if (x === 'pricedesc') {
        this.products = this.sortService.sortPriceDesc(this.products);
      } else if (x === 'stock') {
        this.products = this.sortService.sortStock(this.products);
      } else if (x === 'new') {
        this.products = this.sortService.sortNew(this.products);
      } else if (x === 'deals') {
        this.products = this.sortService.sortDeals(this.products);
      } else if (x === 'liked') {
        this.products = this.sortService.sortLiked(this.products);
      } else if (x === '') {
        this.products = this.sortService.sortName(this.products);
      }
      this.paginate();
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
        this.sortProducts();
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
