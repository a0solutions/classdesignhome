import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';
import { urls } from 'src/app/share/services/apiurl';

@Injectable({
  providedIn: 'root',
})
export class UserManage {
  url: string = urls.urlusers;
  constructor(
    private cnt: HttpClient,
    private tokenManage: TokenManage,
    private router: Router
  ) {}
  postUser(data: Form): Observable<boolean> {
    return this.cnt.post<boolean>(this.url, data);
  }
  verifyUser(data: any): Observable<string> {
    return this.cnt.post(this.url, data, { responseType: 'text' });
  }
  getAllUserInfo(id: string): Observable<string> {
    return this.cnt.get<string>(
      this.url +
        '?validate=' +
        this.tokenManage.getValidateToken() +
        '&id=' +
        id
    );
  }
  getUserId(): string {
    return this.tokenManage.getUserId();
  }
  updateData(form: NgForm, id: string, table: string): Observable<object> {
    console.log(id);
    return this.cnt.put(
      this.url +
        '?validate=' +
        this.tokenManage.getValidateToken() +
        '&id=' +
        id +
        '&table=' +
        table,
      form.value
    );
  }
  isLogged(): boolean {
    return !this.tokenManage.tokenExpired();
  }
  signOut(param?: string): void {
    this.tokenManage.logOut();
    this.router.navigate(['/signin'], { queryParams: { returnTo: param } });
  }
  addNewsLetter(email: object): Observable<object> {
    return this.cnt.post(this.url + '?newsletter=true', email);
  }
}

export type response = {
  message: any;
};
export type varifyuser = {
  email: string;
  password: string;
};
