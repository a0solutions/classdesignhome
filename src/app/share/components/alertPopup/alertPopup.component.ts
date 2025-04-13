import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AlertManage } from '../alerts/services/alertManage.service';
import { fade, fadeUp, fadeUp2 } from '../../services/animations';
import { urls } from 'src/environments/environment';
@Component({
  selector: 'app-alert-popup',
  templateUrl: './alertPopup.component.html',
  styleUrls: ['./alertPopup.component.css'],
  animations: [fadeUp, fade, fadeUp2],
})
export class AlertPopupComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() message: any = { message: '', data: '' };
  @Output() offshow = new EventEmitter<boolean>(false);
  show = false;
  title = '';
  url = urls.url;
  constructor(private alert: AlertManage) {}

  ngOnInit(): void {
    this.alert.showPopup.subscribe({ next: this.showAlert.bind(this) });
  }
  showAlert(show: boolean): void {
    this.show = show;
  }

  closeAlert(): void {
    this.alert.showPopup.next(false);
  }
  focusEmail() {
    this.closeAlert();
    window.scroll({
      top: 20000,
      left: 0,
      behavior: 'smooth',
    });
    this.alert.focusOn.next(true);
  }
}
