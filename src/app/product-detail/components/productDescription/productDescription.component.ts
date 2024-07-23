import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from 'src/app/share/services/checkout.service';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import {
  ProductManage,
  colorId,
  product,
} from 'src/app/share/services/product-manage.service';
import { CategorySubstrPipe } from 'src/app/share/pipes/categorySubstr.pipe';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
  fadeUp5,
  fadeUp6,
  fadeUp7,
  fadeUp8,
} from 'src/app/share/services/animations';
import { urls } from 'src/app/share/services/apiurl';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
@Component({
  selector: 'app-product-description',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.css'],
  animations: [
    fadeLeft,
    fadeUp,
    fadeUp1,
    fadeUp2,
    fadeUp3,
    fadeUp4,
    fadeUp5,
    fadeUp6,
    fadeUp7,
    fadeUp8,
  ],
})
export class ProductDescriptionComponent implements OnChanges, OnInit {
  @Input() product: product = <product>{};
  isLogged = false;
  count = 1;
  colors: colorId[] = <colorId[]>[];
  url: string = urls.url;
  sizes: string[] = [];
  sets: string[] = [];
  like = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  urls: any;
  constructor(
    private products: ProductManage,
    private checkout: Checkout,
    private router: Router,
    private token: TokenManage,
    private substrPipe: CategorySubstrPipe,
    private alert: AlertManage
  ) {}
  ngOnInit(): void {
    this.token.isLogged.subscribe((x) => {
      this.isLogged = x;
    });
    this.products.allLikes.subscribe((x) => {
      this.like = this.products.isLike(this.product.parentRef);
    });
  }
  ngOnChanges(): void {
    this.colors = <colorId[]>[];
    this.setAllParameters();
  }

  setAllParameters(): void {
    this.count = 1;
    this.products.products.subscribe(() => {
      this.processData(
        this.product,
        this.products.getProductByParent(this.product.parentRef)
      );
    });
  }

  processData(x: product, products: product[]): void {
    this.sizes = [];
    this.sets = [];
    products.forEach((y) => {
      this.filterSizeAndSets(x, y);
      const tempColor: colorId = <colorId>{};
      tempColor.color = y.color;
      tempColor.id = y.reference;
      tempColor.name = y.name;
      this.colors.some((x) => x.color === y.color)
        ? null
        : this.colors.push(tempColor);
    });
  }

  filterSizeAndSets(product: product, y: product) {
    this.product.parentRef == y.parentRef &&
    this.substrByCategory(product) == this.substrByCategory(y) &&
    product.color == y.color &&
    product.sets == y.sets
      ? this.sizes.some((x) => {
          x === y.size;
        })
        ? null
        : this.sizes.push(y.size)
      : null;

    this.product.parentRef == y.parentRef &&
    this.substrByCategory(product) == this.substrByCategory(y) &&
    product.color == y.color &&
    product.size == y.size
      ? this.sets.some((x) => {
          x === y.sets;
        })
        ? null
        : this.sets.push(y.sets)
      : null;
  }
  addCart(product: product): void {
    this.checkout.postLocalStorage(product, this.count);
  }
  setNumber(event: number): void {
    this.count = event;
  }
  navigateParent(id: string, name: string): void {
    this.router.navigate(['product/', id, name]);
  }
  validToAdd(): boolean {
    if (this.product.membersOnly == 1 && this.isLogged) return true;
    if (this.product.membersOnly == 0) return true;
    return false;
  }
  goSignIn(): void {
    this.router.navigate(['/signin'], {
      queryParams: {
        returnTo: 'product/' + this.product.id + '/' + this.product.name,
      },
    });
  }
  selectSize(size: string) {
    const product: product = this.products.getDetailFilter(
      this.product.color,
      size,
      this.product.sets,
      this.product.parentRef
    );
    this.router.navigate(['/product', product.reference, product.name]);
  }
  selectSets(sets: string) {
    const product: product = this.products.getDetailFilter(
      this.product.color,
      this.product.size,
      sets,
      this.product.parentRef
    );
    this.router.navigate(['/product', product.reference, product.name]);
  }
  substrByCategory(product: product): string {
    return this.substrPipe.transform(product);
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
  addProductLikes(ref: string): void {
    if (this.token.isLogged.value) {
      this.products.postLikes(ref).subscribe((x: any) => {
        this.like = !this.like;
        this.products.allLikes.next(x);
      });
    } else {
      this.alert.setAlertMessage('isLogOut');
    }
  }
}
