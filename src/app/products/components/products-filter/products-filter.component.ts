import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import {
  CategoriesService,
  categories,
} from 'src/app/share/services/categories.service';
import { FilterManage, filter } from '../../services/filterManage.service';
import { ProductManage } from '../../services/product-manage.service';
@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
})
export class ProductsFilterComponent implements OnInit {
  @Input() categorySelected: string = '';
  @Input() subcategorySelected: string = '';
  allCategories: categories[] = [];
  allColorFilters: string[] = [];
  subcategoriesFilter: string[] = [];
  priceFilter: number = 30000;
  colors: string[] = [];
  constructor(
    private http: Router,
    private categories: CategoriesService,
    private filter: FilterManage,
    private product: ProductManage
  ) {}

  ngOnInit() {
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
  }

  getFiltersByCategories(filters: filter) {
    this.colors = [];
    this.product.getProductByCategory(filters.category).forEach((y) => {
      this.colors.includes(y.color) ? null : this.colors.push(y.color);
    });
  }
  //Getting categories
  getCategories(categories: object) {
    this.allCategories = <categories[]>categories;
  }
  //Listening main category changes
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('categorySelected')) {
      this.filter.resetFilters();
      this.filter.allFilters.value.category = this.categorySelected;
      this.updateAllFilter();
    }
  }

  setUrl(category: string) {
    this.http.navigateByUrl('products/' + category);
  }
  //updating filter object[subcategory]
  updateFilterSub(sub: any) {
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
  updateFilterColor(color: any) {
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
  updateFilterPrice(price: string) {
    this.filter.allFilters.value.price = parseInt(price);
    this.updateAllFilter();
  }
  //updating filter observable in FilterServices
  updateAllFilter() {
    this.filter.allFilters.next(this.filter.allFilters.value);
  }
}
