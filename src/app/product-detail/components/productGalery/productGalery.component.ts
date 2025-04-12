import { Component, Input, OnChanges } from '@angular/core';
import {
  ProductManage,
  imagedata,
  product,
} from 'src/app/share/services/product-manage.service';
import { CarouselService } from 'src/app/share/components/full-carrousel/service/carousel.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from 'src/app/share/services/animations';
import { SeoService } from 'src/app/share/services/seo.service';
import { urls } from 'src/environments/environment';
interface images {
  url: string;
  state: boolean;
}
@Component({
  selector: 'app-product-galery',
  templateUrl: './productGalery.component.html',
  styleUrls: ['./productGalery.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3],
})
export class ProductGaleryComponent implements OnChanges {
  @Input() product: product = <product>{};
  image: boolean[] = [true, false, false, false];
  fullPicture = '';
  allImages: images[] = [];
  url = '';
  size = '55vh!important';

  constructor(
    private products: ProductManage,
    private carousel: CarouselService,
    private seo: SeoService
  ) {}

  ngOnChanges(): void {
    if (this.product.category != undefined) {
      this.loadPictures();
    }
  }

  openFullCarousel(): void {
    this.carousel.show.next(true);
  }
  loadPictures(): void {
    const data: imagedata = <imagedata>{};

    data.category = this.product.category;
    data.parentRef = this.product.parentRef;
    data.sets = this.product.sets;
    data.color = this.product.color;
    this.url =
      urls.url +
      'classapi/images/' +
      data.category +
      '/products/' +
      data.parentRef +
      '/' +
      data.sets +
      '/' +
      data.color +
      '/';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.products.getProductImages(data).subscribe((x: any) => {
      this.allImages = [];
      for (let i = 0; i < x.length; i++) {
        this.allImages.push({ url: encodeURI(this.url + x[i]), state: false });
      }
      this.fullPicture = this.allImages[0].url;
      this.allImages[0].state = true;
      this.seo.setSeo(
        this.product.name,
        this.product.description,
        this.fullPicture
      );
    });
  }
  updatePicture(index: number): void {
    const src = this.allImages[index].url;
    for (let i = 0; i < this.allImages.length; i++) {
      this.allImages[i].state = false;
    }
    this.allImages[index].state = true;
    this.fullPicture = src;
  }

  shareProduct(event: Event, arg1: string, arg2: string) {
    const url =
      'whatsapp://send?text=Look at this awesome thing I found!: ' +
      urls.url +
      'product/' +
      arg1 +
      '/' +
      arg2;
    event.preventDefault();
    event.stopPropagation();
    location.assign(url);
  }
  changeImage(flag: string) {
    let index = 0;
    for (let i = 0; i < this.allImages.length; i++) {
      if (this.allImages[i].state == true) {
        flag == 'next' ? (index = i + 1) : (index = i - 1);
        i == this.allImages.length - 1 && flag == 'next'
          ? (index = 0)
          : i == 0 && flag != 'next'
          ? (index = this.allImages.length - 1)
          : null;
      }
      this.allImages[i].state = false;
    }

    this.allImages[index].state = true;
    this.fullPicture = this.allImages[index].url;
  }
}
