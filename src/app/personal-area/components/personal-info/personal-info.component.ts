import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Checkout,
  order,
} from 'src/app/checkout-page/services/checkout.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  allOrders: Observable<order[]>;
  constructor(private orders: Checkout) {}

  ngOnInit(): void {
    this.allOrders = this.orders.getUserOrders();
  }
}
