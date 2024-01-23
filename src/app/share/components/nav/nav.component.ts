import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { NavManage } from './services/navManage.service';
import { ModalAskManage } from '../modal-ask/services/modalAskManage.service';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() dark: boolean = false;
  items: number = 0;
  cheick: boolean = false;
  answer: Subscription;
  constructor(
    private checkout: Checkout,
    private nav: NavManage,
    private modal: ModalAskManage
  ) {}
  ngOnInit(): void {
    this.checkout.checkCartList() ? this.messageObserve() : null;
    this.checkout.items.subscribe({
      next: this.bascketUpdate.bind(this),
      error: console.log.bind(this),
    });
    this.nav.dark.subscribe({ next: this.darkChange.bind(this) });
  }
  bascketUpdate(products: string[]): void {
    this.items = products.length;
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
}
