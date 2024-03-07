import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CarouselService } from './service/carousel.service';
import {
  ProductManage,
  imagedata,
  product,
} from 'src/app/products/services/product-manage.service';
import { CategorySubstrPipe } from '../../pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from '../../pipes/spacesDelete.pipe';
import { urls } from '../../services/apiurl';

@Component({
  selector: 'app-full-carrousel',
  templateUrl: './full-carrousel.component.html',
  styleUrls: ['./full-carrousel.component.css'],
})
export class FullCarrouselComponent implements OnInit, OnChanges {
  @Input() product: product = <product>{};
  image: boolean[] = [true, false, false, false];
  fullPicture: string = '';
  allImages: any;
  url: string = '';
  carouselFull: boolean = true;
  constructor(
    private products: ProductManage,
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe,
    private carousel: CarouselService
  ) {}
  ngOnInit(): void {
    this.carousel.show.subscribe((x) => {
      this.carouselFull = x;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product.category != undefined) {
      this.loadPictures();
    }
  }
  closeFullCarousel(): void {
    this.carousel.show.next(false);
  }
  loadPictures(): void {
    let data: imagedata = <imagedata>{};
    data.category = this.product.category;
    data.folder = this.substrByCategory(this.product);
    data.parentRef = this.spaceDelete(this.product.parentRef);
    this.url =
      urls.url +
      'classapi/images/' +
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
