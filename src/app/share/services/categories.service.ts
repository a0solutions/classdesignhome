import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './apiurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  url: string = urls.urlctagories;
  getCategories(): Observable<object> {
    return this.http.get(this.url);
  }
}
export type categories = {
  id: string;
  category: string;
  subcategories: string[];
};
