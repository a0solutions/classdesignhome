import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { NavManage } from './services/navManage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  show: boolean = false;
  @Input() dark: boolean = false;
  items: number = 0;
  cheick: boolean = false;
  constructor(private checkout: Checkout, private nav: NavManage) {}
  ngOnInit(): void {
    this.show = this.checkout.checkCartList();
    this.checkout.items.subscribe({
      next: this.bascketUpdate.bind(this),
      error: console.log.bind(this),
    });
    this.nav.dark.subscribe({ next: this.darkChange.bind(this) });
  }
  bascketUpdate(products: string[]) {
    this.items = products.length;
    this.items != 0 ? this.cheickAction() : (this.cheick = false);
  }
  darkChange(dark: boolean) {
    this.dark = dark;
  }
  cheickAction() {
    this.cheick = true;
    setTimeout(() => {
      this.cheick = false;
    }, 1000);
  }
  answerChek(event: boolean) {
    !event ? this.checkout.deleteAll() : this.checkout.setNewTime();
    this.show = false;
  }
}
