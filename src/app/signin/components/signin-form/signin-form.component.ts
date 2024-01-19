import { Component } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent {
  verify = new JwtHelperService();
  constructor(
    private users: UserManage,
    private route: Router,
    private alert: AlertManage
  ) {}

  submit(form: any) {
    this.users.verifyUser(form.value).subscribe({
      next: this.manageResponse.bind(this),
      error: this.setAlert.bind(this),
    });
  }
  manageResponse(response: string) {
    response == '400' ? this.setAlert('user-pass') : this.openSession(response);
  }
  openSession(response: string) {
    let token = <string>response;
    this.actionLoggin(token);
  }
  actionLoggin(token: string) {
    localStorage.setItem('CDHtoken', token);
    this.route.navigate(['/personal']);
  }
  setAlert(code: string, data?: string) {
    this.alert.setAlertMessage(code, data);
    this.alert.show.next(true);
  }
}
