import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.css'],
})
export class ListedComponent implements OnInit {
  printList: product[] = [];
  list: product[] = [];
  subtotal: number = 0;
  show: boolean = false;
  shipping: number = 0;
  total: number = this.shipping + this.subtotal;
  @Input() size: boolean = false;
  constructor(private checkout: Checkout, private products: ProductManage) {}

  ngOnInit(): void {
    this.checkout.checkCartList() ? (this.show = true) : null;
    this.checkout.items.subscribe({
      next: this.resetProperties.bind(this),
      error: console.log.bind(this),
    });
  }
  resetProperties(allItems: string[]): void {
    this.subtotal = 0;
    this.list = [];
    allItems.length != 0
      ? this.printAllProducts(allItems)
      : (this.printList = []);
  }
  printAllProducts(products: string[]): void {
    products.forEach((y) => {
      let product = <product>this.products.getProduct(y);
      this.list.push(product);
      this.subtotal = this.subtotal + product.price;
      this.printList = this.getItems(this.list);
    });
  }

  deleteProduct(id: string): void {
    this.checkout.deleteProductLocalStorage(id);
  }
  getItems(list: product[]): product[] {
    let duplicate_elements = [];
    for (let num in list) {
      for (let num2 in list) {
        if (list[num] === list[num2]) {
          duplicate_elements.push(list[num]);
        }
      }
    }
    return [...new Set(duplicate_elements)];
  }
  itemCount(id: string): number {
    let count: number = 0;
    this.list.forEach((x) => {
      x.id == id ? count++ : null;
    });
    return count;
  }
}
