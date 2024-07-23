import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterManage {
  allFilters: BehaviorSubject<filter> = new BehaviorSubject(<filter>{});
  cardSize: BehaviorSubject<string> = new BehaviorSubject('col-lg-3');
  isInFilter: BehaviorSubject<boolean> = new BehaviorSubject(false);
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
