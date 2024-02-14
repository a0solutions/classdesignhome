import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'productGalery',
  templateUrl: './productGalery.component.html',
  styleUrls: ['./productGalery.component.css'],
})
export class ProductGalery implements OnChanges {
  @Input() product: product = <product>{};
  image: boolean[] = [true, false, false, false];
  fullPicture: string = '';
  miniPicture1: string = '';
  miniPicture2: string = '';
  miniPicture3: string = '';
  miniPicture4: string = '';
  miniPicture5: string = '';
  url: string = '';
  constructor(private products: ProductManage) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadPictures();
  }
  loadPictures(): void {
    this.url =
      './assets/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.product.reference.substr(0, 9).replaceAll(' ', '') +
      '/' +
      this.product.reference.substr(0, 9).replaceAll(' ', '');
    this.fullPicture = this.url + '.jpg';
    this.miniPicture1 = this.url + '.jpg';
    this.miniPicture3 = this.url + '-DETALLE.jpg';
  }
  updatePicture(picture: any, detail: any, img: number): void {
    let src = picture.target.src;
    for (let img in this.image) {
      this.image[img] = false;
    }
    this.image[img] = true;
    detail.src = src;
  }
}
