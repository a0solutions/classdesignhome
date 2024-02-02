import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalAskManage implements OnChanges {
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);
  title: string = '';
  text: string = '';
  answer: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.show.value ? this.answer.next(0) : console.log(this.answer.value);
  }
  showModalMessage(code: string): void {
    if (code == 'cartExist') {
      this.title = 'We remember you';
      this.text =
        "Hi there, It's been a while. Would you like to retake your last cart list?";
    } else if (code == 'useDataCheckout') {
      this.title = 'Personal information';
      this.text =
        'We see that your are logged in, would you like to use your personal information for this checkout?';
    } else if (code == 'shopSuccess') {
      this.title = 'Congratulations!';
      this.text =
        'Your purchase has been made correctly. Would you like to keep shopping?';
    }
    this.show.next(true);
  }
}
