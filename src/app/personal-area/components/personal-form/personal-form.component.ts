import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';
import { UserManage } from 'src/app/signin/services/user-manage.service';

@Component({
  selector: 'personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  personal: any = {};
  loader: boolean = true;
  message: any = '';
  show: boolean = false;
  constructor(private users: UserManage, private token: TokenManage) {}

  ngOnInit() {
    let id = this.token.getUserId();
    this.users.getAllUserInfo(id).subscribe(
      (x: any) => {
        this.personal = <string>x;
        this.loader = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  submit(form: NgForm, flag: string) {
    this.loader = true;
    this.users.updateData(form, this.personal.userid, flag).subscribe((x) => {
      this.personal = <string>x;
      this.loader = false;
      this.messageAlert('personalUpdate');
    });
  }
  //ALERTS
  messageAlert(message: any) {
    this.message = { message: message };
    this.show = true;
  }
  offAlert(event: boolean) {
    this.show = event;
    this.message = '';
  }
}
