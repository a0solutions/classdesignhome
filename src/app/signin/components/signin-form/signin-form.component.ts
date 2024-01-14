import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  verify = new JwtHelperService();
  @Output() message: any = new EventEmitter<object>();
  constructor(private users: UserManage, private route: Router) {}

  ngOnInit() {}
  submit(form: any) {
    this.users.verifyUser(form.value).subscribe(
      (x) => {
        if (x == '400') {
          this.message.emit('user-pass');
        } else {
          let token = <string>x;
          this.actionLoggin(token);
        }
      },
      (err) => {
        this.message.emit('unknown');
      }
    );
  }
  actionLoggin(token: string) {
    localStorage.setItem('CDHtoken', token);
    this.route.navigate(['/personal']);
  }
}
