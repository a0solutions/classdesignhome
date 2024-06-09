import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertManage } from './services/alertManage.service';
import { fade, fadeUp } from '../../services/animations';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [fadeUp, fade],
})
export class AlertsComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() message: any = { message: '', data: '' };
  @Output() offshow = new EventEmitter<boolean>(false);
  show = false;
  title = '';
  constructor(private alert: AlertManage) {}

  ngOnInit(): void {
    this.alert.show.subscribe({ next: this.showAlert.bind(this) });
    this.alert.message.subscribe({ next: this.setMessage.bind(this) });
    this.alert.title.subscribe({ next: this.setTitle.bind(this) });
  }
  showAlert(show: boolean): void {
    this.show = show;
  }
  setMessage(message: string): void {
    this.message = message;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  closeAlert(): void {
    this.alert.show.next(false);
    this.alert.message.next('');
  }
}
