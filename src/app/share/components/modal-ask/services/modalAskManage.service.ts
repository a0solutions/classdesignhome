import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalAskManage {
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);
  title: string = '';
  text: string = '';
  answer: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}
  closeModalAsk(): void {
    this.show.next(false);
    this.answer.next(0);
  }
  showModalMessage(code: string): void {
    if (code == 'cartExist') {
      this.title = 'We remember you';
      this.text =
        "Hi there, It's been a while. Would you like to retake your last cart list?";
    } else if (code == 'useDataCheckout') {
      this.title = 'Personal information';
      this.text =
        'We see that your are logged in, Would you like to use your personal information to make this payment?';
    } else if (code == 'shopSuccess') {
      this.title = 'Congratulations!';
      this.text =
        'Your purchase has been made correctly. You will receive an email with all the details. Would you like to keep shopping?';
    } else if (code == 'cancelOrder') {
      this.title = 'Cancelation';
      this.text =
        'We recommend for you to check our cancelation policy before this action. Are you shure that you whant to keep foward with the cancelation?';
    }
    this.show.next(true);
  }
}
