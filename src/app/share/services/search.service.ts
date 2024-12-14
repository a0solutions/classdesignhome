import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  showSearch: BehaviorSubject<boolean> = new BehaviorSubject(false);
  keyword: BehaviorSubject<string> = new BehaviorSubject('');
  storeSearch(value: string) {
    const valueList: string[] = [];
    valueList.push(value);
    const storage = JSON.parse(<string>localStorage.getItem('searchList'));
    let allSearches: string[] = [];
    storage != null
      ? (allSearches = this.cleanAndConcat(valueList, storage))
      : (allSearches = valueList);

    localStorage.setItem('searchList', JSON.stringify(allSearches));
  }
  cleanAndConcat(valueList: string[], storage: any) {
    const concat = valueList.concat(this.reduceList(storage));
    const dataArr = new Set(concat);
    const result = [...dataArr];
    console.log(result);
    return result;
  }
  getSearchList() {
    const storage = JSON.parse(<string>localStorage.getItem('searchList'));
    return storage;
  }
  reduceList(array: string[]) {
    if (array.length == 20) return array.slice(0, array.length - 1);
    return array;
  }
}
