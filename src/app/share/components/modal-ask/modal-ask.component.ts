import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalAskManage } from './services/modalAskManage.service';

@Component({
  selector: 'app-modal-ask',
  templateUrl: './modal-ask.component.html',
  styleUrls: ['./modal-ask.component.css'],
})
export class ModalAskComponent implements OnInit {
  title: string = '';
  text: string = '';
  show: boolean = false;
  constructor(private modal: ModalAskManage) {}
  ngOnInit(): void {
    this.modal.show.subscribe({ next: this.showModalManage.bind(this) });
  }
  showModalManage(response: boolean): void {
    this.show = response;
    this.title = this.modal.title;
    this.text = this.modal.text;
  }
  answer(answer: number): void {
    this.modal.answer.next(answer);
  }
}
