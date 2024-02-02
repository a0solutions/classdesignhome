import { Injectable } from '@angular/core';
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

  setAllProducts(): Promise<void> {
    return this.getAllProducts().forEach((x) => {
      this.allProducts = x;
    });
  }

  getAllProducts(): Observable<product[]> {
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

  getProductByCategory(category: string): product[] {
    this.products = new BehaviorSubject(this.allProducts);
    if (category != 'products')
      return this.products.value.filter((x) => x.category == category);
    return this.products.value;
  }

  getProductByParent(parent: string): product[] {
    this.products = new BehaviorSubject(this.allProducts);
    return this.products.value.filter((x) => x.parentRef == parent);
  }

  getOfferProduct(category: string): Promise<product[]> {
    return this.setAllProducts().then((x) => {
      if (category != 'products')
        return this.allProducts.filter(
          (x) => x.category == category && x.offer
        );
      return this.allProducts.filter((x) => x.offer);
    });
  }
  getNewAndMembers(): void {}
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
  parentRef: string;
  reference: string;
  category: string;
  subcategory: string;
  color: string;
  price: number;
  oldprice: number;
  minimunOrder: number;
  description: string;
  featureBullet: string;
  countryManufacture: string;
  shipType: string;
  displaySets: number;
  overallWidth: number;
  overallHeight: number;
  overallLenght: number;
  overallWeight: number;
  levelAssembly: string;
  timeAssembly: number;
  comfortLevel: string;
  aditionalTools: string;
  numberBoxes: number;
  installationRequired: string;
  commercialWarranty: string;
  productWarranty: string;
  warrantyLength: string;
  fullOrLimitedWarranty: string;
  metadescription: string;
  warrantyDetails: string;
  stock: number;
  new: number;
  offer: number;
  membersOnly: number;
};
