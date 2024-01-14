import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Checkout {
  items: BehaviorSubject<string[]> = new BehaviorSubject(<string[]>[]);
  localList: string[] = [];
  constructor() {}

  checkCartList() {
    let time = JSON.parse(<string>localStorage.getItem('timeCartList'));
    if (time) {
      this.getLocalStorage();
      let since = Date.now() - time;
      let sixHours = 6 * (60 * 60000);
      if (since > sixHours) return true;
      return false;
    } else {
      return false;
    }
  }
  getLocalStorage() {
    let local = JSON.parse(<string>localStorage.getItem('cartlist'));
    this.localList = local;
    this.items.next(this.localList);
    return this.localList;
  }

  postLocalStorage(products: string, count: number) {
    if (this.items.value.length) {
      this.localList = this.getLocalStorage();
    }
    for (var i = 0; i < count; i++) {
      this.localList.push(products);
    }
    this.setLocalStorage();
  }

  deleteProductLocalStorage(id: string) {
    this.localList = this.getLocalStorage();
    this.localList.splice(this.localList.indexOf(id), 1);
    this.localList.length == 0 ? this.deleteAll() : this.setLocalStorage();
  }
  setLocalStorage() {
    this.items.next(this.localList);
    localStorage.setItem('cartlist', JSON.stringify(this.localList));
    let time = Date.now();
    localStorage.setItem('timeCartList', JSON.stringify(time));
  }
  deleteAll() {
    localStorage.removeItem('cartlist');
    localStorage.removeItem('timeCartList');
    this.items.next([]);
    this.localList = [];
  }
  setNewTime() {
    let time = Date.now();
    localStorage.setItem('timeCartList', JSON.stringify(time));
  }
}
