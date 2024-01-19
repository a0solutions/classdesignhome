import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-ask',
  templateUrl: './modal-ask.component.html',
  styleUrls: ['./modal-ask.component.css'],
})
export class ModalAskComponent {
  title: string = 'We remember you';
  text: string =
    "Hi there, It's been a while. Would you like to retake your last cart list?";
  @Output() answerCheck = new EventEmitter<boolean>();
  @Input() show: boolean = false;
  constructor() {}

  answer(answer: boolean): void {
    this.answerCheck.emit(answer);
  }
}
