import { Component, Input, OnInit } from '@angular/core';
import {
  ProductManage,
  colorId,
  product,
} from 'src/app/share/services/product-manage.service';

@Component({
  selector: 'app-showroom-card',
  templateUrl: './showroom-card.component.html',
  styleUrls: ['./showroom-card.component.css'],
})
export class ShowroomCardComponent implements OnInit {
  @Input() product: product;
  colors: colorId[] = [];
  background = '';
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
    window.open('product/' + id + '/' + name, '_blank');
  }
}
