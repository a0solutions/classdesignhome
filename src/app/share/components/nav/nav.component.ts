import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  items: number = 0;
  constructor(private checkout: Checkout) {}
  ngOnInit(): void {
    this.checkout.items.subscribe((x) => {
      this.items = x.length;
    });
  }
}
