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
      name: 'Mirror',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bathroom',
      subcategory: 'Bathroom Vanity',
      price: 350,
      color: 'yellow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '35',
      name: 'Sink',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bathroom',
      subcategory: 'Sinks',
      price: 1350,
      color: 'red',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '36',
      name: 'Nightstands',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bedroom',
      subcategory: 'Bedroom Sets',
      price: 850,
      color: 'black',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '37',
      name: 'Master Bed',
      dimentions: 'VC 67CM X 60CM X 80CM',
      reference: 'REF. 33722',
      category: 'bedroom',
      subcategory: 'Nightstands',
      price: 9250,
      color: 'silver',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '38',
      name: 'Bed Holder',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'white',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '39',
      name: 'Table + 6 chairs',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'white',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '40',
      name: 'Cup Cabinets',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'green',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
    },
    {
      id: '41',
      name: 'Table + 6 chairs',
      dimentions: 'VC 67CM X 60CM X 80CM ',
      reference: 'REF. 33722',
      category: 'living',
      subcategory: 'Dinig Table',
      price: 1350,
      color: 'blue',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien. Sed in congue quam. Curabitur nec commodo odio, eu egestas augue. Cras sit amet nisl sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mi purus. Phasellus sit amet tristique augue. Aenean quis ipsum libero. Nulla tristique ligula id tempor consectetur. Curabitur facilisis maximus ipsum. Proin a tincidunt dolor, non eleifend justo. Duis lectus justo, consequat in lectus quis, fringilla gravida massa.',
      metadescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam sed dui semper pharetra vitae eu sapien.',
      stock: true,
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
  getProductByCategory(category: any) {
    this.products = new BehaviorSubject(this.allProducts);
    if (category != 'products')
      return this.products.value.filter((x) => x.category == category);
    return this.products.value;
  }
  getProduct(id: string) {
    return this.allProducts.find((x) => x.id == id);
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
};
