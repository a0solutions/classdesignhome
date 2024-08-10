import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout, order } from 'src/app/share/services/checkout.service';
import { UserManage } from 'src/app/share/services/user-manage.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  allOrders: Observable<order[]>;
  constructor(private orders: Checkout, private user: UserManage) {}

  ngOnInit(): void {
    this.allOrders = this.orders.getUserOrders();
  }
  signOut() {
    this.user.signOut();
  }
}
