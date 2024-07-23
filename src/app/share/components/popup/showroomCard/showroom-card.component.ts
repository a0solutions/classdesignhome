import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { urls } from 'src/app/share/services/apiurl';
import { product } from 'src/app/share/services/product-manage.service';

@Component({
  selector: 'app-showroom-card',
  templateUrl: './showroom-card.component.html',
  styleUrls: ['./showroom-card.component.css'],
})
export class ShowroomCardComponent implements OnInit {
  @Input() product: product;
  background = '';
  url = urls.url;
  @Output() active: EventEmitter<boolean> = new EventEmitter();
  constructor(private http: Router) {}
  ngOnInit(): void {
    this.background =
      urls.url +
      'classapi/images/' +
      this.product.category +
      '/products/' +
      this.product.parentRef +
      '/' +
      this.product.sets +
      '/' +
      this.product.color +
      '/1.webp';
    this.background = this.background.replaceAll(' ', '%20');
  }
  close() {
    this.active.emit(false);
  }
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name, '_blank');
  }
  navigateCollection(category: string, subcategory: string): void {
    this.http.navigate(['/products/' + category + '/' + subcategory]);
  }
}
