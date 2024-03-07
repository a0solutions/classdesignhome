import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
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
  constructor(
    private users: UserManage,
    private token: TokenManage,
    private alert: AlertManage
  ) {}

  ngOnInit(): void {
    let id = this.token.getUserId();
    this.users.getAllUserInfo(id).subscribe({
      next: this.getDataForm.bind(this),
      error: this.setAlert.bind(''),
    });
  }
  getDataForm(data: string): void {
    this.personal = <string>data;
    this.loader = false;
  }
  submit(form: NgForm, flag: string): void {
    this.loader = true;
    this.users.updateData(form, this.personal.id, flag).subscribe({
      next: this.updateUser.bind(this),
      error: this.setAlert.bind(''),
    });
  }
  updateUser(personalData: object): void {
    this.personal = personalData;
    this.loader = false;
    this.setAlert('personalUpdate');
  }
  setAlert(code: any): void {
    console.log(code);
    this.alert.setAlertMessage(code);
  }
}
