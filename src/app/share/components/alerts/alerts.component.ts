import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AlertManage } from './services/alertManage.service';
import { fadeUp, modalFade } from '../../services/animations';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [modalFade],
})
export class AlertsComponent implements OnInit {
  @Input() message: any = { message: '', data: '' };
  @Output() offshow = new EventEmitter<boolean>(false);
  show: boolean = false;
  title: string = '';
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
