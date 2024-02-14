import { Injectable, OnChanges, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterManage {
  allFilters: BehaviorSubject<filter> = new BehaviorSubject(<filter>{});
  cardSize: BehaviorSubject<string> = new BehaviorSubject('col-lg-3');
  constructor() {}
  resetFilters() {
    this.allFilters.next(<filter>{});
  }
}
export type filter = {
  category: string;
  color: string[];
  subcategory: string[];
  price: number;
  size: string;
};
