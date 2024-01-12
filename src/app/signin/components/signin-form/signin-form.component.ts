import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent implements OnInit {
  @Output() message: any = new EventEmitter<object>();
  constructor(private users: UserManage) {}

  ngOnInit() {}
  submit(form: any) {
    this.users.verifyUser(form.value).subscribe(
      (x) => {
        if (x == '400') {
          this.message.emit('user-pass');
        } else {
          let verify = new JwtHelperService();
          localStorage.setItem('token', <string>x);
          let token = localStorage.getItem('token');
        }
      },
      (err) => {
        this.message.emit('unknown');
      }
    );
  }
}
