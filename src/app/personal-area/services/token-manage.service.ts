import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenManage {
  token: string = '';
  verify = new JwtHelperService();
  constructor() {
    this.token = <string>localStorage.getItem('CDHtoken');
  }

  getUserId() {
    this.getToken();
    if (!this.verify.isTokenExpired(this.token)) {
      let info = this.verify.decodeToken(this.token);
      return info.iss;
    } else {
      return null;
    }
  }
  private getToken() {
    this.token = <string>localStorage.getItem('CDHtoken');
    return this.token;
  }
}