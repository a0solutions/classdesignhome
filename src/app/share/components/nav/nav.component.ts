import { Component, Input, OnInit } from '@angular/core';
import {
  Checkout,
  cartProduct,
} from 'src/app/checkout-page/services/checkout.service';
import { NavManage } from './services/navManage.service';
import { ModalAskManage } from '../modal-ask/services/modalAskManage.service';
import { Subscription } from 'rxjs';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';
import { UserManage } from 'src/app/signin/services/user-manage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() dark: boolean = false;
  isLogged: boolean = false;
  items: number = 0;
  cheick: boolean = false;
  answer: Subscription;
  constructor(
    private checkout: Checkout,
    private nav: NavManage,
    private modal: ModalAskManage,
    private token: TokenManage,
    private auth: UserManage,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.token.isLogged.subscribe((x) => {
      this.isLogged = x;
    });
    this.checkout.checkCartList() ? this.messageObserve() : null;
    this.checkout.items.subscribe({
      next: this.bascketUpdate.bind(this),
      error: console.log.bind(this),
    });
    this.nav.dark.subscribe({ next: this.darkChange.bind(this) });
  }
  bascketUpdate(products: cartProduct[]): void {
    this.items = 0;
    products.forEach((x) => {
      this.items = x.count + this.items;
    });
    this.items != 0 ? this.cheickAction() : (this.cheick = false);
  }
  messageObserve(): void {
    this.modal.showModalMessage('cartExist');
    this.answer = this.modal.answer.subscribe({
      next: this.answerChek.bind(this),
    });
  }
  answerChek(response: number): void {
    if (response != 0) {
      response == 1 ? this.checkout.deleteAll() : this.checkout.setNewTime();
      this.modal.answer.next(0);
      this.modal.show.next(false);
      this.answer.unsubscribe();
    }
  }
  darkChange(dark: boolean): void {
    this.dark = dark;
  }
  cheickAction(): void {
    this.cheick = true;
    setTimeout(() => {
      this.cheick = false;
    }, 1000);
  }
  logOut(): void {
    this.auth.signOut(this.route.url);
  }
}
