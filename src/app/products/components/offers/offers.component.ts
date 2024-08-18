/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import {
  ProductManage,
  product,
} from '../../../share/services/product-manage.service';
import { LoaderService } from 'src/app/share/components/loader/services/loader.service';
import { urls } from 'src/environments/environment';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnChanges {
  allProducts: product[] = [];
  items: number[] = [];
  cardsNum = 4;
  url = urls.url;
  constructor(private products: ProductManage, private loader: LoaderService) {}
  @Input() category = '';

  ngOnChanges(): void {
    this.products.getAllProducts().subscribe((x) => {
      if (this.category === 'all') {
        this.allProducts = x.filter((y) => y.offer != 0);
      } else {
        this.allProducts = x.filter(
          (y) => y.offer != 0 && y.category == this.category
        );
      }
      for (let i = 0; i <= this.allProducts.length / this.cardsNum; i++) {
        this.items.push(i);
      }
      this.loader.show.next(false);
    });

    this.compareNumber(window.innerWidth);
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
