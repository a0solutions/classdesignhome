/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import { ProductManage } from './product-manage.service';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserManage {
  url: string = urls.urlusers;
  constructor(
    private http: HttpClient,
    private tokenManage: TokenManage,
    private router: Router,
    private productService: ProductManage
  ) {}
  postUser(data: Form): Observable<boolean> {
    return this.http.post<boolean>(this.url, data);
  }
  verifyUser(data: any): Observable<string> {
    return this.http.post(this.url, data, { responseType: 'text' });
  }
  getAllUserInfo(id: string): Observable<string> {
    return this.http.get<string>(
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
    return this.http.put(
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
    this.productService.allLikes.next([]);
    this.router.navigate(['/signin'], { queryParams: { returnTo: param } });
  }
  addNewsLetter(email: object): Observable<object> {
    return this.http.post(this.url + '?newsletter=true', email);
  }
  changePassword(changePass: passwordChange): Observable<object> {
    const params = new HttpParams()
      .set('validate', this.tokenManage.getValidateToken())
      .set('changePassword', true);
    return this.http.put(this.url, changePass, { params });
  }
}
export interface passwordChange {
  userId: string;
  newPassword: string;
}
export type response = {
  message: any;
};
export type varifyuser = {
  email: string;
  password: string;
};
