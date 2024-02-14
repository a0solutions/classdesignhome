import { Component, Input, OnInit } from '@angular/core';
import {
  ProductManage,
  colorId,
  product,
} from '../../services/product-manage.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: product;
  colors: colorId[] = [];
  background: string = '';
  constructor(private products: ProductManage) {}
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
      './assets/images/' +
      this.product.category.replaceAll(' ', '_') +
      '/products/' +
      this.product.reference.substr(0, 9).replaceAll(' ', '') +
      '/' +
      this.product.reference.substr(0, 9).replaceAll(' ', '') +
      '.jpg';
  }
  changeBackgound(InOut: number): void {
    InOut == 1
      ? (this.background =
          './assets/images/' +
          this.product.category.replaceAll(' ', '_') +
          '/products/' +
          this.product.reference.substr(0, 9).replaceAll(' ', '') +
          '/' +
          this.product.reference.substr(0, 9).replaceAll(' ', '') +
          '-DETALLE.jpg')
      : (this.background =
          './assets/images/' +
          this.product.category.replaceAll(' ', '_') +
          '/products/' +
          this.product.reference.substr(0, 9).replaceAll(' ', '') +
          '/' +
          this.product.reference.substr(0, 9).replaceAll(' ', '') +
          '.jpg');
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
}
