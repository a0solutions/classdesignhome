import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from 'src/app/share/services/apiurl';

@Injectable({
  providedIn: 'root',
})
export class Contactform {
  url = urls.urlContact;
  constructor(private http: HttpClient) {}

  postContact(data: FormData) {
    return this.http.post(this.url, data);
  }
}
