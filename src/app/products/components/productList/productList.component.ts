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
import { SearchService } from 'src/app/share/services/search.service';
import { LoaderService } from 'src/app/share/components/loader/services/loader.service';

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
  keyword: string;
  constructor(
    private allProducts: ProductManage,
    private filters: FilterManage,
    private sortService: SortService,
    private filter: FilterManage,
    private smartSearchService: SearchService,
    private loader: LoaderService
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

  filterProducts(filters: filter): void {
    this.itemNumber = this.paginateNumber;
    this.products = [];
    this.parents = [];
    this.sortService
      .sortPriceDesc(this.allProducts.getFilterProducts(filters))
      .map((x) => {
        if (!this.parents.includes(x.parentRef)) {
          this.parents.push(x.parentRef);
          this.products.push(x);
          this.allProducts.filterProducts.next(this.products.length);
          this.sortProducts();
        }
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
        this.products = this.sortService.sortPriceDesc(this.products);
      }
      this.paginate();
    });
  }

  smartSearch() {
    this.smartSearchService.keyword.subscribe((x) => {
      this.keyword = x;
      x != ''
        ? x
            .toLowerCase()
            .split(' ')
            .forEach((x: string) => {
              this.printProduct = this.products.filter(
                (y) =>
                  y.name.toLowerCase().includes(x) ||
                  y.description?.toLowerCase().includes(x) ||
                  y.category?.toLowerCase().includes(x) ||
                  y.color?.toLowerCase().includes(x) ||
                  y.subcategory?.toLowerCase().includes(x) ||
                  y.sets?.toLowerCase().includes(x) ||
                  y.materialDetail?.toLowerCase().includes(x) ||
                  y.frameMaterial?.toLowerCase().includes(x) ||
                  y.counterMaterial?.toLowerCase().includes(x) ||
                  y.upholsteryMaterial?.toLowerCase().includes(x) ||
                  y.upholsteryFillMaterial?.toLowerCase().includes(x) ||
                  y.price?.toString().toLowerCase().includes(x) ||
                  y.featureBullet?.toLowerCase().includes(x)
              );
            })
        : (this.printProduct = this.products);
    });
  }
  closeSearch() {
    this.smartSearchService.showSearch.next(false);
    this.smartSearchService.keyword.next('');
  }
  paginate(): void {
    this.smartSearch();
    this.printProduct = this.printProduct.slice(0, this.itemNumber);
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
