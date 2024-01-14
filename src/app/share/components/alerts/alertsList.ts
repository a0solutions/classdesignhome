import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class alertList {
  getMessage(code: string, data?: string) {
    if (code == 'user-pass') {
      return 'Sorry user and password dose not match, try again or change your password.';
    } else if (code == 'email-exist') {
      return 'There is another account using this email.';
    } else if (code == 'registered') {
      return 'Congratulations your sign up was succesfully.';
    } else if (code == 'personalUpdate') {
      return 'Congratulations your update has been set succesfully.';
    } else if (code == 'contact') {
      return (
        'Thnak you for writing us ' +
        data +
        ', we will get in touch with you as soon as possible.'
      );
    } else {
      return 'Somthing went wrong tray again later.';
    }
  }
}
