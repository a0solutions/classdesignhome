import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductManage, product } from '../../services/product-manage.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnChanges, OnInit {
  allProducts: product[] = [];
  items: number[] = [];
  cardsNum: number = 4;
  constructor(private products: ProductManage) {}
  @Input() category: string = '';

  ngOnInit(): void {
    this.compareNumber(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  handleKeyDown(event: any): void {
    let width = event.target.innerWidth;
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
  ngOnChanges(changes: SimpleChanges): void {
    this.allProducts = [];
    this.products.getOfferProduct(this.category).then((x) => {
      this.allProducts = x;
      this.items = [];
      for (var i = 1; i <= Math.ceil(this.allProducts.length / 4); i++) {
        this.items.push(i);
      }
    });
  }
}
