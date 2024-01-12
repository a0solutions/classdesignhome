import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/products/services/product-manage.service';

@Injectable({
  providedIn: 'root',
})
export class Checkout {
  items: BehaviorSubject<product[]> = new BehaviorSubject(<product[]>[]);
  localList: product[] = [];
  constructor() {}

  getLocalStorage() {
    this.localList = JSON.parse(<string>localStorage.getItem('cartlist'));
    this.items.next(this.localList);
    return this.localList;
  }

  postLocalStorage(products: product, count: number) {
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
    this.localList.splice(
      this.localList.indexOf(<product>this.localList.find((x) => x.id == id)),
      1
    );
    this.setLocalStorage();
  }
  setLocalStorage() {
    this.items.next(this.localList);
    localStorage.setItem('cartlist', JSON.stringify(this.localList));
  }
}
