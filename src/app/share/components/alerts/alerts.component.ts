import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertManage } from './services/alertManage.service';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit {
  @Input() message: any = { message: '', data: '' };
  show: boolean = false;
  @Output() offshow = new EventEmitter<boolean>(false);
  constructor(private alert: AlertManage) {}

  ngOnInit(): void {
    this.alert.show.subscribe({ next: this.showAlert.bind(this) });
    this.alert.message.subscribe({ next: this.setMessage.bind(this) });
  }
  showAlert(show: boolean) {
    this.show = show;
  }
  setMessage(message: string) {
    this.message = message;
  }
  closeAlert() {
    this.alert.show.next(false);
    this.alert.message.next('');
  }
}
