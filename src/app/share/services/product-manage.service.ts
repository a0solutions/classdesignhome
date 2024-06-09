import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { urls } from 'src/app/share/services/apiurl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductManage {
  url: string = urls.urlProducts;
  urlImage: string = urls.urlImages;
  allProducts: product[] = [];
  products: BehaviorSubject<product[]> = new BehaviorSubject(this.allProducts);
  filterProducts: BehaviorSubject<number> = new BehaviorSubject(0);
  showedProducts: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private http: HttpClient) {
    this.setAllProducts();
  }

  setAllProducts(): Promise<void> {
    return this.getAllProducts().forEach((x) => {
      this.allProducts = x;
      this.products.next(this.allProducts);
    });
  }

  getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.url);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFilterProducts(filters: any): product[] {
    this.products = new BehaviorSubject(this.allProducts);
    for (const prop in filters) {
      if (filters[prop] != 0 || filters[prop] != '') {
        if (prop != 'price' && prop != 'category') {
          this.products.next(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.products.value.filter((x: any) =>
              filters[prop].includes(x[prop])
            )
          );
        } else if (prop == 'category') {
          if (filters.category != 'products') {
            this.products.next(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              this.products.value.filter((x: any) =>
                filters.category.includes(x.category)
              )
            );
          }
        } else {
          this.products.next(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    return this.products.value.filter((x) => x.parentRef == parent);
  }

  getOfferProduct(category: string): Promise<product[]> {
    return this.setAllProducts().then(() => {
      if (category != 'products')
        return this.allProducts.filter(
          (x) => x.category == category && x.offer
        );
      return this.allProducts.filter((x) => x.offer);
    });
  }
  getProduct(reference: string): Observable<product> {
    this.setAllProducts();
    return this.http.get<product>(this.url + '?reference=' + reference);
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
    const productsNo: string[] = [];
    this.allProducts
      .filter((x) => x.subcategory == sub)
      .forEach((y) => {
        !productsNo.some((z) => z === y.parentRef)
          ? productsNo.push(y.parentRef)
          : null;
      });

    if (productsNo[0] != undefined) return productsNo.length;
    return 0;
  }
  getDetailFilter(
    color: string,
    size: string,
    sets: string,
    parentRef: string
  ): product {
    return <product>(
      this.allProducts.find(
        (x) =>
          x.color == color &&
          x.size == size &&
          x.sets == sets &&
          x.parentRef == parentRef
      )
    );
  }
  getProductImages(data: imagedata) {
    return this.http.get(
      this.urlImage +
        '?category=' +
        data.category +
        '&folder=' +
        data.folder +
        '&parent=' +
        data.parentRef
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  simplifyOrderProduct(order: any): any {
    const ssimplifyObject = order;
    delete ssimplifyObject.dimentions;
    delete ssimplifyObject.frameMaterial;
    delete ssimplifyObject.materialDetail;
    delete ssimplifyObject.upholstered;
    delete ssimplifyObject.upholsteryMaterial;
    delete ssimplifyObject.upholsteryFillMaterial;
    delete ssimplifyObject.description;
    delete ssimplifyObject.featureBullet;
    delete ssimplifyObject.displaySets;
    delete ssimplifyObject.levelAssembly;
    delete ssimplifyObject.timeAssembly;
    delete ssimplifyObject.comfortLevel;
    delete ssimplifyObject.aditionalTools;
    delete ssimplifyObject.installationRequired;
    delete ssimplifyObject.commercialWarranty;
    delete ssimplifyObject.productWarranty;
    delete ssimplifyObject.warrantyLength;
    delete ssimplifyObject.fullOrLimitedWarranty;
    delete ssimplifyObject.metadescription;
    delete ssimplifyObject.warrantyDetails;
    delete ssimplifyObject.headboardHeight;
    delete ssimplifyObject.stock;
    delete ssimplifyObject.new;
    delete ssimplifyObject.offer;
    delete ssimplifyObject.membersOnly;
    delete ssimplifyObject.counterTopIncluded;
    delete ssimplifyObject.counterMaterial;
    delete ssimplifyObject.sinkIncluded;
    delete ssimplifyObject.sinkType;
    delete ssimplifyObject.overallWidth;
    delete ssimplifyObject.overallHeight;
    delete ssimplifyObject.overallLenght;
    delete ssimplifyObject.overallWeight;
    delete ssimplifyObject.numberBoxes;
    return ssimplifyObject;
  }
}
export interface imagedata {
  category: string;
  folder: string;
  parentRef: string;
}
export interface colorId {
  color: string;
  id: string;
  name: string;
}
export interface product {
  id: string;
  name: string;
  dimentions?: string;
  parentRef: string;
  reference: string;
  category: string;
  subcategory: string;
  color: string;
  detailColor: string;
  frameMaterial?: string;
  materialDetail?: string;
  upholstered?: string;
  upholsteryMaterial?: string;
  upholsteryFillMaterial?: string;
  price: number;
  oldprice: number;
  minimunOrder: number;
  size: string;
  sets: string;
  description?: string;
  featureBullet: string;
  countryManufacture: string;
  shipType: string;
  displaySets?: number;
  overallWidth: number;
  overallHeight: number;
  overallLenght: number;
  overallWeight: number;
  levelAssembly?: string;
  timeAssembly?: number;
  comfortLevel?: string;
  aditionalTools?: string;
  numberBoxes: number;
  installationRequired?: string;
  commercialWarranty?: string;
  productWarranty?: string;
  warrantyLength?: string;
  fullOrLimitedWarranty?: string;
  metadescription?: string;
  warrantyDetails?: string;
  headboardHeight?: string;
  stock: number;
  new?: number;
  offer?: number;
  membersOnly?: number;
  counterTopIncluded?: string;
  counterMaterial?: string;
  sinkIncluded?: string;
  sinkType?: number;
}
