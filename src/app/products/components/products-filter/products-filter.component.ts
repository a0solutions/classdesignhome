/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {
  CategoriesService,
  categories,
} from 'src/app/share/services/categories.service';
import {
  FilterManage,
  filter,
} from '../../../share/services/filterManage.service';
import {
  ProductManage,
  product,
} from '../../../share/services/product-manage.service';
import { urls } from 'src/app/share/services/apiurl';
import { take } from 'rxjs';

interface sizes {
  category: string;
  size: string;
  index: number;
}

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
})
export class ProductsFilterComponent implements OnInit {
  @Input() categorySelected = '';
  @Input() subcategorySelected = '';
  url = urls.url;
  allCategories: categories[] = [];
  allColorFilters: string[] = [];
  subcategoriesFilter: string[] = [];
  filterProducts = 0;
  priceFilter = 0;
  sizesFilter: sizes[] = [];
  colors: string[] = [];
  products: product[] = [];
  sizeSelected: boolean[] = [];
  showedProducts = 0;
  resetColor = false;
  constructor(
    private categories: CategoriesService,
    private filter: FilterManage,
    private product: ProductManage
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.priceFilter = 30000;
  }
  getProducts() {
    this.categories
      .getCategories()
      .pipe(take(1))
      .subscribe({
        next: this.getCategories.bind(this),
        error: console.log.bind(this),
      });
    //getting subcategory filter
    this.subcategoriesFilter = [this.subcategorySelected];
    this.filter.allFilters.value.subcategory = this.subcategoriesFilter;
    this.updateAllFilter();
    //subscribing to filter changes and updating the data
    this.filter.allFilters.subscribe({
      next: this.getFiltersByCategories.bind(this),
      error: console.log.bind(this),
    });
    this.product.showedProducts.pipe(take(1)).subscribe((x) => {
      this.showedProducts = x;
    });
    this.product.filterProducts.pipe(take(1)).subscribe((x) => {
      this.filterProducts = x;
    });
  }

  getFiltersByCategories(filters: filter): void {
    this.colors = [];
    this.sizesFilter = [];
    let index = 0;
    this.product.getProductByCategory(filters.category).forEach((y) => {
      this.colors.includes(y.color) ? null : this.colors.push(y.color);
      const sizes: sizes = <sizes>{};
      sizes.category = y.category;
      sizes.size = y.size;
      sizes.index = index;
      this.sizesFilter.find(
        (x) => x.size === sizes.size && x.category === sizes.category
      )
        ? null
        : this.sizesFilter.push(sizes);
      index++;
    });
  }
  findSizesFilter(category: string): boolean {
    if (this.sizesFilter.find((x) => x.category == category)) return true;
    return false;
  }
  selectingFilterCategory(category: string): sizes[] {
    return this.sizesFilter.filter((x) => x.category == category);
  }
  //Getting categories
  getCategories(categories: object): void {
    this.allCategories = <categories[]>categories;
  }
  //Listening main category changes
  ngOnChanges(changes: { [key: string]: SimpleChange }): void {
    if (changes.hasOwnProperty('categorySelected')) {
      this.filter.resetFilters();
      this.filter.allFilters.value.category = this.categorySelected;
      this.updateAllFilter();
    }
  }

  setUrl(category: string): void {
    window.location.href = 'products/' + category;
    //this.http.navigate(['products/' + category]);
  }
  //updating filter object[subcategory]
  updateFilterSub(sub: any): void {
    const values = sub.target.value;
    sub.target.checked
      ? this.subcategoriesFilter.push(values)
      : this.subcategoriesFilter.splice(
          this.subcategoriesFilter.indexOf(values),
          1
        );
    this.filter.allFilters.value.subcategory = this.subcategoriesFilter;
    this.updateAllFilter();
  }
  //updating filter object[color]
  updateFilterColor(color: any): void {
    color.create
      ? this.allColorFilters.push(color.color)
      : this.allColorFilters.splice(
          this.allColorFilters.indexOf(color.color),
          1
        );
    this.filter.allFilters.value.color = this.allColorFilters;
    this.updateAllFilter();
  }
  //updating filter object[price]
  updateFilterPrice(price: string): void {
    this.filter.allFilters.value.price = parseInt(price);
    this.updateAllFilter();
    this.priceFilter = parseInt(price);
  }
  updateFilterSize(size: string, index: number): void {
    this.sizeSelected = [];
    this.sizeSelected[index] = true;
    this.filter.allFilters.value.size = size;
    this.updateAllFilter();
  }
  //updating filter observable in FilterServices
  updateAllFilter(): void {
    this.filter.allFilters.next(this.filter.allFilters.value);
    setTimeout(() => {
      this.resetColor = false;
    }, 2000);
  }

  changeFilter(cardSize: string) {
    this.filter.cardSize.next(cardSize);
  }
  clearAllFilters() {
    this.updateFilterPrice('30000');
    this.sizeSelected = [];
    this.filter.allFilters.value.size = '';
    this.colors.splice(0, this.colors.length);
    this.filter.allFilters.value.color = [];
    this.allColorFilters = [];
    this.resetColor = true;
    this.getProducts();
  }
}
