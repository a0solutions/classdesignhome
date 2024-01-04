import { Injectable } from '@angular/core';
import { FilterManage } from './filterManage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductManage {
  allProducts: product[] = [
    {
      id: '34',
      name: 'Sink',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bathroom',
      subcategory: 'Bathroom Vanity',
      price: 1350,
      color: 'yellow',
    },
    {
      id: '34',
      name: 'Sink',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bathroom',
      subcategory: 'Sinks',
      price: 1350,
      color: 'red',
    },
    {
      id: '34',
      name: 'Master Bed',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bedroom',
      subcategory: 'Bedroom Sets',
      price: 1350,
      color: 'black',
    },
    {
      id: '34',
      name: 'Master Bed',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bedroom',
      subcategory: 'Nightstands',
      price: 13250,
      color: 'silver',
    },
    {
      id: '34',
      name: 'Table + 6 chairs',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'white',
    },
    {
      id: '34',
      name: 'Table + 6 chairs',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'white',
    },
    {
      id: '34',
      name: 'Table + 6 chairs',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'green',
    },
    {
      id: '34',
      name: 'Table + 6 chairs',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'blue',
    },
  ];
  products: BehaviorSubject<product[]> = new BehaviorSubject(this.allProducts);
  constructor(private filter: FilterManage) {}

  getFilterProducts(filters: any) {
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
  getProductColors(category: any) {
    this.products = new BehaviorSubject(this.allProducts);
    if (category != 'products')
      return this.products.value.filter((x) => x.category == category);
    return this.products.value;
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
};
