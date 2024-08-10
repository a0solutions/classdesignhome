import { Component, OnInit } from '@angular/core';
import { ModalAskManage } from './services/modalAskManage.service';
import { fade, fadeUp, fadeUp2 } from '../../services/animations';

@Component({
  selector: 'app-modal-ask',
  templateUrl: './modal-ask.component.html',
  styleUrls: ['./modal-ask.component.css'],
  animations: [fadeUp2, fadeUp, fade],
})
export class ModalAskComponent implements OnInit {
  title = '';
  text = '';
  show = false;
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
