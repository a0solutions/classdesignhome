import { Injectable } from '@angular/core';
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
  showModalMessage(code: string): void {
    if (code == 'cartExist') {
      this.title = 'We remember you';
      this.text =
        "Hi there, It's been a while. Would you like to retake your last cart list?";
    }
    this.show.next(true);
  }
}
