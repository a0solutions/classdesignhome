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
    this.localList = JSON.parse(<string>localStorage.getItem('cartlist'));
    this.items.next(this.localList);
    return this.localList;
  }

  postLocalStorage(products: string, count: number) {
    this.items.value.length ? (this.localList = this.getLocalStorage()) : null;
    for (var i = 0; i < count; i++) {
      this.localList.push(products);
    }
    this.setLocalStorage();
  }

  setNewTime(): void {
    let time = Date.now();
    localStorage.setItem('timeCartList', JSON.stringify(time));
  }

  updateCart(event: number, id: string): void {
    let count = 0;
    this.localList.forEach((x) => {
      x == id ? count++ : null;
    });
    count >= event
      ? this.deleteProductLocalStorage(id)
      : this.postLocalStorage(id, 1);
  }

  deleteProductLocalStorage(id: string): void {
    this.localList.splice(this.localList.indexOf(id), 1);
    this.localList.length == 0 ? this.deleteAll() : this.setLocalStorage();
  }

  setLocalStorage(): void {
    this.items.next(this.localList);
    localStorage.setItem('cartlist', JSON.stringify(this.localList));
    this.setNewTime();
  }

  deleteAllProductsId(id: string): void {
    let count = 0;
    this.localList.forEach((x) => {
      x == id ? count++ : null;
    });
    for (var i = 0; i < count; i++) {
      this.deleteProductLocalStorage(id);
    }
  }
  deleteAll(): void {
    localStorage.removeItem('cartlist');
    localStorage.removeItem('timeCartList');
    this.items.next(<string[]>[]);
  }
}
