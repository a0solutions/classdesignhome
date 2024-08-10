import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { UserManage } from '../share/services/user-manage.service';
import { AlertManage } from '../share/components/alerts/services/alertManage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeUp } from '../share/services/animations';

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css'],
  animations: [fadeUp],
})
export class ResetPasswordComponent implements OnInit {
  userEmail: string;
  showChangePassword = false;
  token: string;
  constructor(
    private loader: LoaderService,
    private navService: NavManage,
    private userService: UserManage,
    private alertService: AlertManage,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((x) => {
      x.get('token') ? this.showPassword(x.get('token')) : null;
    });
    this.loader.show.next(false);
    this.navService.dark.next(true);
  }
  submitEmail() {
    this.loader.show.next(true);
    this.userService
      .sendValidationEmailPasswordChange(this.userEmail)
      .subscribe((x) => {
        this.loader.show.next(false);
        this.alertService.setAlertMessage('pssawordRquested');
        this.userEmail = '';
      });
  }
  showPassword(token: any) {
    this.showChangePassword = true;
    this.token = atob(token);
  }
  passwordChanged(event: boolean) {
    event ? this.router.navigate(['signin']) : null;
  }
}
