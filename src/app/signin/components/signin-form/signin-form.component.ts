import { Component, OnInit } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  verify = new JwtHelperService();
  goTo: string = 'personal';
  processingSignIn: boolean = false;
  constructor(
    private users: UserManage,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private alert: AlertManage,
    private tokenManage: TokenManage
  ) {}
  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((params) => {
      params.get('returnTo')
        ? (this.goTo = <string>params.get('returnTo'))
        : null;
    });
  }

  submit(form: any): void {
    this.processingSignIn = true;
    this.users.verifyUser(form.value).subscribe({
      next: this.manageResponse.bind(this),
      error: this.setAlert.bind(this),
    });
  }
  manageResponse(response: string): void {
    this.processingSignIn = false;
    response == '400' ? this.setAlert('user-pass') : this.openSession(response);
  }
  openSession(response: string): void {
    let token = <string>response;
    this.actionLoggin(token);
  }
  actionLoggin(token: string): void {
    this.tokenManage.setToken(token);
    this.route.navigate([this.goTo]);
  }
  setAlert(code: string): void {
    this.alert.setAlertMessage(code);
  }
}
