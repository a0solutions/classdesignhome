import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Contactform {
  url = urls.urlContact;
  constructor(private http: HttpClient) {}

  postContact(data: FormData): Observable<object> {
    return this.http.post<object>(this.url, data);
  }
}
