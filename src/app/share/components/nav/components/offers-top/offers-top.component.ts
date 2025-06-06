import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  product,
  ProductManage,
} from 'src/app/share/services/product-manage.service';
import { AlertManage } from '../../../alerts/services/alertManage.service';

@Component({
  selector: 'app-offers-top',
  templateUrl: './offers-top.component.html',
  styleUrls: ['./offers-top.component.css'],
})
export class OffersTopComponent implements OnInit {
  @ViewChild('allitems') allItems: ElementRef;
  movement: any;
  top = 0;
  @Input() allProducts: product[] = [];
  constructor(
    private productsService: ProductManage,
    private router: Router,
    private alert: AlertManage
  ) {}

  ngOnInit() {
    this.moveCarousel();
  }
  navigate(product: product) {
    this.router.navigate(['product/' + product.reference + '/' + product.name]);
  }
  moveCarousel() {
    this.movement = setInterval(() => {
      if (this.top <= this.allProducts.length * -25) {
        this.top = 0;
      } else {
        let y = this.top;
        y = y - 25;
        this.top = y;
      }
      // this.allItems.style.top = '50px';
    }, 3000);
  }
  stopCarousel() {
    clearInterval(this.movement);
  }
  getDeal(product: product) {
    return this.productsService.getDeal(product);
  }
  closeAlert(): void {
    this.alert.showPopup.next(false);
  }
  focusEmail() {
    this.closeAlert();
    window.scroll({
      top: 20000,
      left: 0,
      behavior: 'smooth',
    });
    this.alert.focusOn.next(true);
  }
}
