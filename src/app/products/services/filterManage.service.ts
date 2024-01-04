import { Injectable, OnChanges, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterManage {
  allFilters: BehaviorSubject<filter> = new BehaviorSubject({
    category: '',
    color: [''],
    subcategory: [''],
    price: 0,
  });

  constructor() {}
  resetFilters() {
    this.allFilters.next({
      category: '',
      color: [''],
      subcategory: [''],
      price: 0,
    });
  }
}
type filter = {
  category: string;
  color: string[];
  subcategory: string[];
  price: number;
};
