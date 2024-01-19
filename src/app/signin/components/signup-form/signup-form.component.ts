import { Component } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  constructor(private users: UserManage, private alert: AlertManage) {}

  submit(form: NgForm) {
    this.users.postUser(form.value).subscribe({
      next: this.manageResponse.bind(this),
      error: this.setAlert.bind(''),
    });
  }
  manageResponse(response: object) {
    parseInt(<string>(<unknown>response)) == 400
      ? this.setAlert('email-exist')
      : this.setAlert('registered');
  }
  setAlert(code: string, data?: string) {
    this.alert.setAlertMessage(code, data);
    this.alert.show.next(true);
  }
}
