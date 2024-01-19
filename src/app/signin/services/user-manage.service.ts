import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { urls } from 'src/app/share/services/apiurl';

@Injectable({
  providedIn: 'root',
})
export class UserManage {
  url: string = urls.urlusers;
  constructor(private cnt: HttpClient) {}
  postUser(data: Form): Observable<string> {
    return this.cnt.post<string>(this.url, data);
  }
  verifyUser(data: any): Observable<string> {
    return this.cnt.post(this.url, data, { responseType: 'text' });
  }
  getAllUserInfo(id: string): Observable<string> {
    return this.cnt.get<string>(this.url + '?id=' + id);
  }
  updateData(form: NgForm, id: string, table: string): Observable<object> {
    return this.cnt.put(this.url + '?id=' + id + '&table=' + table, form.value);
  }
}

export type response = {
  message: any;
};
export type varifyuser = {
  email: string;
  password: string;
};
