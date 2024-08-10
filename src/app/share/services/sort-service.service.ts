import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './product-manage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortList: BehaviorSubject<string> = new BehaviorSubject('');
  mostLiked: product[];
  url = urls.urlProducts;
  constructor(private http: HttpClient) {
    const params = new HttpParams().set('getLiked', true);
    this.http.get<product[]>(this.url, { params }).subscribe((x) => {
      const likedProducts: any[] = [];
      x.forEach((x) => {
        const found = likedProducts.some((y) => y.name === x);
        !found
          ? likedProducts.push({ name: x, amount: 1 })
          : likedProducts.find((z) => z.name === x).amount++;
      });
      this.mostLiked = likedProducts.sort((a, b) => b.amount - a.amount);
    });
  }
  sortPriceAsc(allProducts: product[]): product[] {
    return allProducts.sort((a, b) => b.price - a.price);
  }
  sortPriceDesc(allProducts: product[]): product[] {
    return allProducts.sort((a, b) => a.price - b.price);
  }
  sortNew(allProducts: product[]): product[] {
    return allProducts.sort((a, b) => b.new - a.new);
  }
  sortLiked(allProducts: product[]): product[] {
    const sortMarkets = (array: any, sortArray: any) => {
      return [...array].sort(
        (a, b) =>
          sortArray.some((x: any) => x.name === b.parentRef) -
          sortArray.some((x: any) => x.name === a.parentRef)
      );
    };
    return sortMarkets(allProducts, this.mostLiked);
  }
  sortStock(allProducts: product[]): product[] {
    return allProducts.sort((a, b) => b.stock - a.stock);
  }
  sortDeals(allProducts: product[]): product[] {
    return allProducts.sort((a, b) => b.promoPrice - a.promoPrice);
  }
  sortName(allProducts: product[]): product[] {
    return allProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
}
