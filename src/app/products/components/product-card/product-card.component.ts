import { Component, Input, OnInit } from '@angular/core';
import {
  ProductManage,
  colorId,
  product,
} from '../../services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';
import { urls } from 'src/app/share/services/apiurl';
import { fadeButtonCard } from 'src/app/share/services/animations';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [fadeButtonCard],
})
export class ProductCardComponent implements OnInit {
  @Input() product: product;
  colors: colorId[] = [];
  background = '';
  hover = false;
  constructor(
    private products: ProductManage,
    private substrPipe: CategorySubstrPipe,
    private spacesPipe: SpacesDeletePipe
  ) {}
  ngOnInit(): void {
    this.products.products
      .subscribe((x) => {
        x != undefined
          ? this.dataProcess(
              this.products.getProductByParent(this.product.parentRef)
            )
          : null;
      })
      .unsubscribe();
    this.background =
      urls.url +
      'classapi/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.spaceDatele(this.product.parentRef) +
      '/' +
      this.substrByCategory(this.product) +
      '/1.jpg';
  }
  changeBackgound(InOut: number): void {
    const url =
      urls.url +
      'classapi/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.spaceDatele(this.product.parentRef) +
      '/' +
      this.substrByCategory(this.product) +
      '/';

    InOut == 1 ? this.imageExists(url) : (this.background = url + '1.jpg');
  }
  imageExists(url: string): void {
    const image = new Image();
    image.src = url + '2.jpg';
    image.width != 0 ? (this.background = url + '2.jpg') : null;
  }
  dataProcess(products: product[]) {
    products.forEach((y) => {
      const tempColor: colorId = <colorId>{};
      tempColor.color = y.color;
      tempColor.id = y.id;
      tempColor.name = y.name;
      this.colors.some((x) => x.color === y.color)
        ? null
        : this.colors.push(tempColor);
    });
  }
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name.replaceAll(' ', '_'), '_blank');
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spaceDatele(text: string): string {
    return this.spacesPipe.transform(text);
  }
  shareProduct(event: Event, arg1: string, arg2: string) {
    const url =
      'whatsapp://send?text=Look at this awesome thing I found!: ' +
      urls.url +
      'product/' +
      arg1 +
      '/' +
      arg2.replaceAll(' ', '_');
    event.preventDefault();
    event.stopPropagation();
    location.assign(url);
  }
}
