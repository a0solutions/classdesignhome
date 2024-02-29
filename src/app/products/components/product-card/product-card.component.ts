import { Component, Input, OnInit } from '@angular/core';
import {
  ProductManage,
  colorId,
  product,
} from '../../services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from 'src/app/share/pipes/spacesDelete.pipe';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: product;
  colors: colorId[] = [];
  background: string = '';
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
      'http://localhost/classapi/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.spaceDatele(this.product.parentRef) +
      '/' +
      this.substrByCategory(this.product) +
      '/1.jpg';
  }
  changeBackgound(InOut: number): void {
    InOut == 1
      ? (this.background =
          'http://localhost/classapi/images/' +
          this.product.category.replaceAll(' ', '_') +
          '/products/' +
          this.spaceDatele(this.product.parentRef) +
          '/' +
          this.substrByCategory(this.product) +
          '/2.jpg')
      : (this.background =
          'http://localhost/classapi/images/' +
          this.product.category.replaceAll(' ', '_') +
          '/products/' +
          this.spaceDatele(this.product.parentRef) +
          '/' +
          this.substrByCategory(this.product) +
          '/1.jpg');
  }
  dataProcess(products: product[]) {
    products.forEach((y) => {
      let tempColor: colorId = <colorId>{};
      tempColor.color = y.color;
      tempColor.id = y.id;
      tempColor.name = y.name;
      this.colors.some((x) => x.color === y.color)
        ? null
        : this.colors.push(tempColor);
    });
  }
  navigate(id: string, name: string): void {
    window.open('product/' + id + '/' + name, '_blank');
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
  }
  spaceDatele(text: string): string {
    return this.spacesPipe.transform(text);
  }
}
