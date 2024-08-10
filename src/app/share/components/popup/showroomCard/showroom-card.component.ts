import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/share/services/product-manage.service';
import { urls } from 'src/environments/environment';

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
      this.url +
      'classapi/images/' +
      this.product.category +
      '/products/' +
      this.product.parentRef +
      '/' +
      this.product.sets +
      '/' +
      this.product.color +
      '/1.webp';
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
  encodeURI(background: string) {
    return encodeURI(background);
  }
}
