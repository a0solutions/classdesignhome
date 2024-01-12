import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  @Output() message: any = new EventEmitter<object>();
  constructor(private users: UserManage) {}

  ngOnInit() {}
  submit(form: any) {
    this.users.postUser(form.value).subscribe(
      (x) => {
        if (x == 400) {
          this.message.emit('email-exist');
        } else {
          this.message.emit('registered');
          form.reset();
        }
      },
      (err) => {
        this.message.emit('unknown');
      }
    );
  }
}
