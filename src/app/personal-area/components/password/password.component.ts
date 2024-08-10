import { Component, OnInit } from '@angular/core';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import {
  passwordChange,
  UserManage,
} from 'src/app/share/services/user-manage.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  newPassword: string;
  repeatPassword: string;
  showPass = false;
  changePass: passwordChange = <passwordChange>{};
  constructor(
    private alert: AlertManage,
    private token: TokenManage,
    private user: UserManage
  ) {}

  submit() {
    if (this.newPassword === this.repeatPassword) {
      this.changePass.newPassword = this.newPassword;
      this.changePass.userId = this.token.getUserId();
      this.user.changePassword(this.changePass).subscribe((x) => {
        x ? this.changeSuccess() : this.changeFeil();
      });
    } else {
      this.alert.setAlertMessage('passwordNotMatch');
    }
  }
  changeSuccess() {
    this.alert.setAlertMessage('passwordSuccess');
    this.newPassword = '';
    this.repeatPassword = '';
  }
  changeFeil() {
    this.alert.setAlertMessage('passwordFeil');
  }
}
