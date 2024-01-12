import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { urls } from 'src/app/share/services/apiurl';

@Injectable({
  providedIn: 'root',
})
export class UserManage {
  url: string = urls.urlusers;
  constructor(private cnt: HttpClient) {}
  postUser(data: Form) {
    return this.cnt.post(this.url, data);
  }
  verifyUser(data: any) {
    return this.cnt.post(this.url, data, { responseType: 'text' });
  }
}
export type response = {
  message: any;
};
export type varifyuser = {
  email: string;
  password: string;
};
