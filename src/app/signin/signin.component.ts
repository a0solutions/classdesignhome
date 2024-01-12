import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  message: any = '';
  show: boolean = false;
  messageAlert(message: any) {
    this.message = { message: message };
    this.show = true;
  }
  offAlert(event: boolean) {
    this.show = event;
    this.message = '';
  }
}
