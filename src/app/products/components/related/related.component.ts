/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener, Input, OnChanges } from '@angular/core';
import {
  ProductManage,
  product,
} from '../../../share/services/product-manage.service';
import { LoaderService } from 'src/app/share/components/loader/services/loader.service';
import { urls } from 'src/environments/environment';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css'],
})
export class RelatedComponent implements OnChanges {
  allProducts: product[] = [];
  items: number[] = [];
  cardsNum = 4;
  url = urls.url;
  constructor(private products: ProductManage, private loader: LoaderService) {}
  @Input() category = '';
  @Input() subcategory = '';

  ngOnChanges(): void {
    this.products.getAllProducts().subscribe((x) => {
      if (this.category === 'all') {
        this.deleteParents(x);
      } else {
        this.deleteParents(
          x.filter(
            (y) =>
              y.category == this.category &&
              y.subcategory != this.subcategory &&
              y.offer == 0
          )
        );
      }

      this.loader.show.next(false);
    });

    this.compareNumber(window.innerWidth);
  }
  deleteParents(products: product[]) {
    this.items = [];
    const parent: string[] = [];
    for (let i = 0; i < products.length; i++) {
      if (!parent.includes(products[i].parentRef)) {
        this.allProducts.push(products[i]);
        parent.push(products[i].parentRef);
      }
    }
    for (let i = 1; i <= this.allProducts.length / this.cardsNum; i++) {
      this.items.push(i);
    }
  }

  @HostListener('window:resize', ['$event'])
  handleKeyDown(event: any): void {
    const width = event.target.innerWidth;
    this.compareNumber(width);
  }
  compareNumber(width: number): void {
    if (width > 1290) {
      this.cardsNum = 4;
    } else if (width < 1290 && width > 640) {
      this.cardsNum = 2;
    } else if (width <= 640) {
      this.cardsNum = 1;
    }
  }
}
