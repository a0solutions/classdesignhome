import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ProductManage,
  imagedata,
  product,
} from 'src/app/products/services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';

@Component({
  selector: 'productGalery',
  templateUrl: './productGalery.component.html',
  styleUrls: ['./productGalery.component.css'],
})
export class ProductGalery implements OnChanges {
  @Input() product: product = <product>{};
  image: boolean[] = [true, false, false, false];
  fullPicture: string = '';
  allImages: any;
  url: string = '';
  constructor(
    private products: ProductManage,
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product.category != undefined) {
      this.loadPictures();
    }
  }
  loadPictures(): void {
    let data: imagedata = <imagedata>{};
    data.category = this.product.category;
    data.folder = this.substrByCategory(this.product);
    data.parentRef = this.spaceDelete(this.product.parentRef);
    this.url =
      'http://localhost/classapi/images/' +
      data.category +
      '/products/' +
      data.parentRef +
      '/' +
      data.folder +
      '/';
    this.products.getProductImages(data).forEach((x: any) => {
      this.fullPicture = this.url + x[0];
      this.allImages = x;
    });
  }
  updatePicture(picture: any, img: number): void {
    let src = picture.target.style.backgroundImage.substr(
      5,
      picture.target.style.backgroundImage.length - 7
    );
    for (let img in this.image) {
      this.image[img] = false;
    }
    this.image[img] = true;
    this.fullPicture = src;
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spaceDelete(text: string): string {
    return this.spacesPipe.transform(text);
  }
}
