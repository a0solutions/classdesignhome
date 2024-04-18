import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from 'src/app/products/services/product-manage.service';
import { urls } from 'src/app/share/services/apiurl';
@Injectable({
  providedIn: 'root',
})
export class Checkout {
  items: BehaviorSubject<cartProduct[]> = new BehaviorSubject(
    <cartProduct[]>[]
  );
  typeTax: BehaviorSubject<number> = new BehaviorSubject(0);
  url: string = urls.urlOrders;
  localList: cartProduct[] = [];
  constructor(private http: HttpClient) {}

  checkCartList(): boolean {
    let time = JSON.parse(<string>localStorage.getItem('timeCartList'));
    if (time) {
      this.getLocalStorage();
      let since = Date.now() - time;
      let sixHours = 8 * (60 * 60000);
      if (since > sixHours) return true;
      return false;
    } else {
      return false;
    }
  }
  getLocalStorage(): cartProduct[] {
    this.localList = JSON.parse(<string>localStorage.getItem('cartlist'));
    this.items.next(this.localList);
    return this.localList;
  }

  postLocalStorage(product: product, count: number): void {
    let cartItem: cartProduct = { product, count };
    this.findCartItem(cartItem.product)
      ? this.upadateProductCart(cartItem)
      : this.insertNewProductCart(cartItem);
  }
  findCartItem(product: product): boolean {
    let findedItem: cartProduct = <cartProduct>(
      this.localList.find((x) => x.product.id == product.id)
    );
    if (findedItem) return true;
    return false;
  }
  insertNewProductCart(cartItem: cartProduct): void {
    this.localList.push(cartItem);
    this.setLocalStorage();
  }
  upadateProductCart(cartItem: cartProduct): void {
    let index = this.localList.indexOf(
      <cartProduct>(
        this.localList.find((x) => x.product.id == cartItem.product.id)
      )
    );
    cartItem.count == 0
      ? this.deleteAllProductsId(index)
      : (this.localList[index] = cartItem)
      ? this.setLocalStorage()
      : null;
  }
  setNewTime(): void {
    let time = Date.now();
    localStorage.setItem('timeCartList', JSON.stringify(time));
  }
  setLocalStorage(): void {
    this.items.next(this.localList);
    localStorage.setItem('cartlist', JSON.stringify(this.localList));
    this.setNewTime();
  }

  deleteAllProductsId(index: number): void {
    this.localList.splice(index, 1);
    this.localList.length == 0 ? this.deleteAll() : this.setLocalStorage();
  }
  deleteAll(): void {
    this.localList = <cartProduct[]>[];
    this.items.next(this.localList);
    localStorage.removeItem('cartlist');
    localStorage.removeItem('timeCartList');
    localStorage.removeItem('TempOrder');
  }
  sendOrder(data: order): Observable<object> {
    return this.http.post(this.url, data);
  }
  saveTempOrder(order: order): void {
    localStorage.setItem('TempOrder', JSON.stringify(order));
  }
  getTempData(): order {
    let order = localStorage.getItem('TempOrder');
    return <order>JSON.parse(<string>order);
  }
  getTaxes(state: string): Observable<object> {
    return this.http.get(this.url + '?taxes=' + state);
  }
  getTrackingNumber(trackingNumber: string): Observable<object> {
    return this.http.get(this.url + '?tracking=' + trackingNumber);
  }
  cancelOrder(number: string): Observable<object> {
    return this.http.post(this.url + '?cancel=true', number);
  }
}

export interface cartProduct {
  product: product;
  count: number;
}
export interface order {
  billing: billing;
  shipping: shipping;
  cartProducts: cartProduct[];
  amount: number;
  member: string;
  items: number;
  order?: string;
  atelier?: string;
  oceanic?: string;
  finale?: string;
  roadshow?: string;
  trackingNumber?: string;
  date?: string;
  orderId?: string;
  state?: number;
}
export interface billing {
  billingName: string;
  billingSurname: string;
  billingEmail: string;
  billingPhone: string;
  billingAddress: string;
  billingAddress2: string;
  billingZip: string;
  billingCity: string;
  billingState: string;
  billingCountry: string;
}
export interface shipping {
  shippingName: string;
  shippingSurname: string;
  shippingAddress: string;
  shippingAddress2: string;
  shippingZip: string;
  shippingCity: string;
  shippingState: string;
  shippingCountry: string;
}
