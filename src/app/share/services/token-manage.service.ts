import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenManage {
  token = '';
  isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);
  verify = new JwtHelperService();
  constructor() {
    this.token = <string>localStorage.getItem('CDHtoken');
  }

  logOut(): void {
    localStorage.removeItem('CDHtoken');
    this.isLogged.next(false);
  }
  getUserId(token: string): string {
    this.getToken();
    if (!this.verify.isTokenExpired(token)) {
      const info = this.verify.decodeToken(token);
      return info.iss;
    } else {
      return '';
    }
  }
  private getToken(): string {
    this.token = <string>localStorage.getItem('CDHtoken');
    return this.token;
  }
  tokenExpired(): boolean {
    return this.verify.isTokenExpired(this.token);
  }
  setToken(token: string): void {
    localStorage.setItem('CDHtoken', token);
    this.isLogged.next(true);
  }
  getValidateToken(): string {
    return this.getToken();
  }
  getUserName() {
    this.getToken();
    if (!this.verify.isTokenExpired(this.token)) {
      const info = this.verify.decodeToken(this.token);
      return info.user_name;
    } else {
      return '';
    }
  }
}
