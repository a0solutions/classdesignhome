import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import {
  CategoriesService,
  categories,
} from 'src/app/share/services/categories.service';
import { FilterManage, filter } from '../../services/filterManage.service';
import { ProductManage, product } from '../../services/product-manage.service';
import { urls } from 'src/app/share/services/apiurl';

interface sizes {
  category: string;
  size: string;
}
@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
})
export class ProductsFilterComponent implements OnInit {
  @Input() categorySelected: string = '';
  @Input() subcategorySelected: string = '';
  url: string = urls.url;
  allCategories: categories[] = [];
  allColorFilters: string[] = [];
  subcategoriesFilter: string[] = [];
  filterProducts: number = 0;
  priceFilter: number = 30000;
  sizesFilter: sizes[] = [];
  colors: string[] = [];
  products: product[] = [];
  sizeSelected: boolean[] = [];
  showedProducts: number = 0;
  constructor(
    private http: Router,
    private categories: CategoriesService,
    private filter: FilterManage,
    private product: ProductManage
  ) {}

  ngOnInit(): void {
    this.categories.getCategories().subscribe({
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
    this.product.showedProducts.subscribe((x) => {
      this.showedProducts = x;
    });
    this.product.filterProducts.subscribe((x) => {
      this.filterProducts = x;
    });
  }

  getFiltersByCategories(filters: filter): void {
    this.colors = [];
    this.sizesFilter = [];

    this.product.getProductByCategory(filters.category).forEach((y) => {
      this.colors.includes(y.color) ? null : this.colors.push(y.color);
      let sizes: sizes = <sizes>{};
      sizes.category = y.category;
      sizes.size = y.size;
      this.sizesFilter.find(
        (x) => x.size === sizes.size && x.category === sizes.category
      )
        ? null
        : this.sizesFilter.push(sizes);
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
    let values = sub.target.value;
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
  }

  changeFilter(cardSize: string) {
    this.filter.cardSize.next(cardSize);
  }
}
