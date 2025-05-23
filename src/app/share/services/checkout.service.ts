/* eslint-disable no-cond-assign */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import {
  product,
  ProductManage,
} from 'src/app/share/services/product-manage.service';
import { urls } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Checkout {
  items: BehaviorSubject<cartProduct[]> = new BehaviorSubject(
    <cartProduct[]>[]
  );
  countryTax: Subject<string> = new Subject();
  typeTax: BehaviorSubject<number> = new BehaviorSubject(0);
  coupon: BehaviorSubject<discount> = new BehaviorSubject(<discount>{});
  url: string = urls.urlOrders;
  urlDiscount: string = urls.urlDiscount;
  localList: cartProduct[] = [];
  couponUser: Subject<string> = new Subject();

  /****************AMOUNTS*************************/

  amount: BehaviorSubject<number> = new BehaviorSubject(0);
  taxes: BehaviorSubject<number> = new BehaviorSubject(0);
  discountedAmount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private http: HttpClient,
    private token: TokenManage,
    private productService: ProductManage
  ) {}

  checkCartList(): boolean {
    const time = JSON.parse(<string>localStorage.getItem('timeCartList'));
    if (time) {
      this.getLocalStorage();
      const since = Date.now() - time;
      const sixHours = 8 * (60 * 60000);
      if (since > sixHours) return true;
      return false;
    } else {
      return false;
    }
  }
  getLocalStorage(): cartProduct[] {
    this.localList = JSON.parse(<string>localStorage.getItem('cartlist'));
    this.localList.forEach((x) => {
      this.productService.getProduct(x.product.reference).subscribe((y) => {
        x.product = y;
      });
    });

    this.items.next(this.localList);
    return this.localList;
  }

  postLocalStorage(product: product, count: number): void {
    const cartItem: cartProduct = { product, count };
    this.findCartItem(cartItem.product)
      ? this.upadateProductCart(cartItem)
      : this.insertNewProductCart(cartItem);
  }
  findCartItem(product: product): boolean {
    const findedItem: cartProduct = <cartProduct>(
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
    const index = this.localList.indexOf(
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
    const time = Date.now();
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
    this.coupon.next(<discount>{});
    this.amount.next(0);
    this.taxes.next(0);
    this.taxes.next(0);
  }
  sendOrder(data: order): Observable<object> {
    return this.http.post(this.url, data);
  }
  saveTempOrder(order: order): void {
    localStorage.setItem('TempOrder', JSON.stringify(order));
  }
  getTempData(): order {
    const order = localStorage.getItem('TempOrder');
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
  getUserOrders(): Observable<order[]> {
    const token = this.token.token;
    const userId = this.token.getUserId(token);
    const params = new HttpParams()
      .set('userId', userId)
      .set('validate', token);
    return this.http.get<order[]>(this.url, { params });
  }
  /*
   *
   *
   *
   *
   *********************DISCOUNT AREA*************************/
  getDiscountByCoupon(coupon: string): Observable<object> {
    const params = new HttpParams().set('coupon', coupon);
    return this.http.get<discount>(this.urlDiscount, { params });
  }
}

export interface discount {
  id: number;
  coupon: string;
  discount: number;
  user: string;
  used: number;
  creationnDate: string;
  usedDate: string;
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
  shippingCompany: string;
  trackingNumber?: string;
  date?: string;
  orderId?: string;
  state?: number;
  canceled: string;
  delivered: string;
  taxes: number;
  paymentMethod: string;
  discount: number;
  coupon: string;
  discountAmount: number;
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
