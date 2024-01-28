import { Injectable } from '@angular/core';
import { FilterManage } from './filterManage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { urls } from 'src/app/share/services/apiurl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductManage {
  url: string = urls.urlProducts;
  allProducts: product[] = [];
  products: BehaviorSubject<product[]> = new BehaviorSubject(this.allProducts);
  constructor(private http: HttpClient) {
    this.setAllProducts();
  }
  setAllProducts() {
    return this.getAllProducts().forEach((x) => {
      this.allProducts = x;
    });
  }
  getAllProducts() {
    return this.http.get<product[]>(this.url);
  }
  getFilterProducts(filters: any): product[] {
    this.products = new BehaviorSubject(this.allProducts);
    for (let prop in filters) {
      if (filters[prop] == 0 || filters[prop] == '') {
      } else {
        if (prop != 'price' && prop != 'category') {
          this.products.next(
            this.products.value.filter((x: any) =>
              filters[prop].includes(x[prop])
            )
          );
        } else if (prop == 'category') {
          if (filters.category == 'products') {
          } else {
            this.products.next(
              this.products.value.filter((x: any) =>
                filters.category.includes(x.category)
              )
            );
          }
        } else {
          this.products.next(
            this.products.value.filter((x: any) => filters.price >= x.price)
          );
        }
      }
    }

    return this.products.value;
  }
  getProductByCategory(category: any): product[] {
    this.products = new BehaviorSubject(this.allProducts);
    if (category != 'products')
      return this.products.value.filter((x) => x.category == category);
    return this.products.value;
  }
  getOfferProduct(category: any): product[] {
    if (category != 'products')
      return this.allProducts.filter((x) => x.category == category && x.offer);
    return this.allProducts.filter((x) => x.offer);
  }
  getProduct(id: string): Observable<product> {
    return this.http.get<product>(this.url + '?id=' + id);
  }
  findProduct(id: string): product {
    return <product>this.products.value.find((x) => x.id == id);
  }
  getCategory(name: string): product | undefined {
    return this.allProducts.find((x: product) => {
      if (x.name == name) return <string>x.category;
      return <string>'';
    });
  }
  getCategoryById(id: string): product | undefined {
    return this.allProducts.find((x: product) => x.id == id);
  }
  getNumberBySub(sub: string): number {
    let productsNo = [this.allProducts.find((x) => x.subcategory == sub)];
    if (productsNo[0] != undefined) return productsNo.length;
    return 0;
  }
}
export type product = {
  id: string;
  name: string;
  dimentions: string;
  reference: string;
  category: string;
  subcategory: string;
  color: string;
  price: number;
  description: string;
  metadescription: string;
  stock: boolean;
  new: number;
  offer: boolean;
  membersOnly: boolean;
};
