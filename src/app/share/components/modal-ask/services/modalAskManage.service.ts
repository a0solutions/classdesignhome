import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalAskManage {
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);
  title = '';
  text = '';
  answer: Subject<number> = new Subject();

  closeModalAsk(): void {
    this.show.next(false);
    this.answer.next(0);
  }
  showModalMessage(code: string): void {
    if (code == 'cartExist') {
      this.title = 'A Gentle Reminder from Class Design';
      this.text =
        "We noticed you paused your selection. Would you like to review and complete your purchase of our exquisite pieces? If you have questions, we're here to assist!";
    } else if (code == 'useDataCheckout') {
      this.title = 'Streamlined Checkout';
      this.text =
        'You are currently logged in. Would you prefer to use your saved information for a quicker checkout?';
    } else if (code == 'shopSuccess') {
      this.title = 'Purchase Successful!';
      this.text =
        'Your purchase has been made correctly. You will receive an email with all the details. Would you like to keep shopping?';
    } else if (code == 'cancelOrder') {
      this.title = 'Cancelation';
      this.text =
        'Your cancelation has been made. An email with all the details has been sent. Would you like to continue exploring our collections?';
    } else if (code == 'badPayment') {
      this.title = 'Payment Gateway Error';
      this.text =
        'We encountered an issue when processing your payment. Please attempt again, and should the problem persist, contact our support team for assistance. Would you like to try again?';
    }
    this.show.next(true);
  }
}
