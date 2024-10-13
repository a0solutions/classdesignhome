import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShowroomsService {
  categoryActive: Subject<string> = new Subject();
  url = urls.urlShowrooms;
  constructor(private http: HttpClient) {}
  getShowrooms(category: string) {
    const params = new HttpParams().set('category', category);
    return this.http.get(this.url, { params });
  }
}
