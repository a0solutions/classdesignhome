import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
} from '@angular/core';
import { alertList } from './alertsList';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnChanges {
  @Input() message: any = { message: '', data: '' };
  @Input() show: boolean = false;
  @Output() offshow = new EventEmitter<boolean>(false);
  printMessage: string;
  constructor(private alertList: alertList) {}
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('message')) {
      this.message != '' ? this.setMessage() : null;
    }
  }
  setMessage() {
    this.show = true;
    this.printMessage = this.alertList.getMessage(
      this.message.message,
      this.message.data
    );
    this.message = '';
  }
  closeAlert() {
    this.show = false;
    this.offshow.emit(this.show);
  }
}
