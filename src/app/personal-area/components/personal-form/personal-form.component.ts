import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { LoaderService } from 'src/app/share/components/loader/services/loader.service';
import { countries, states } from 'src/app/share/services/states';
import { UserManage } from 'src/app/share/services/user-manage.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css'],
})
export class PersonalFormComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  personal: any = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any = '';
  show = false;
  states: string[] = states;
  countries: string[] = countries;
  constructor(
    private users: UserManage,
    private token: TokenManage,
    private alert: AlertManage,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    const tokenString = this.token.getValidateToken();
    const id = this.token.getUserId(tokenString);
    this.users.getAllUserInfo(id).subscribe({
      next: this.getDataForm.bind(this),
      error: this.setAlert.bind(''),
    });
  }
  getDataForm(data: string): void {
    this.personal = <string>data;

    if (!this.personal.billingState) {
      this.personal.billingState = '';
    }
    if (!this.personal.billingCountry) {
      this.personal.billingCountry = '';
    }
    if (!this.personal.shippingState) {
      this.personal.shippingState = '';
    }
    if (!this.personal.shippingCountry) {
      this.personal.shippingCountry = '';
    }
  }
  submit(form: NgForm, flag: string): void {
    this.loader.show.next(true);
    if (!form.value.shipaddress2) {
      form.value.shipddress2 = '';
    }
    if (!form.value.billaddress2) {
      form.value.billaddress2 = '';
    }
    this.users.updateData(form, this.personal.id, flag).subscribe({
      next: this.updateUser.bind(this),
      error: this.setAlert.bind(''),
    });
  }
  updateUser(personalData: object): void {
    this.personal = personalData;
    this.setAlert('personalUpdate');
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAlert(code: any): void {
    this.loader.show.next(false);
    this.alert.setAlertMessage(code);
  }
}
