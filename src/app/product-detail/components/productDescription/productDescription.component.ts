import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from 'src/app/checkout-page/services/checkout.service';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';
import {
  ProductManage,
  product,
} from 'src/app/products/services/product-manage.service';
@Component({
  selector: 'productDescription',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.css'],
})
export class ProductDescriptionComponent implements OnChanges, OnInit {
  @Input() id: string = '';
  isLogged: boolean = false;
  count: number = 1;
  colors: colorId[] = <colorId[]>[];
  product: product = <product>{};
  constructor(
    private products: ProductManage,
    private checkout: Checkout,
    private router: Router,
    private token: TokenManage
  ) {}
  ngOnInit(): void {
    this.token.isLogged.subscribe((x) => {
      this.isLogged = x;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.count = 1;
    this.colors = <colorId[]>[];
    this.product = <product>{};
    this.setAllParameters();
  }

  setAllParameters(): void {
    this.products.getProduct(this.id).forEach((x) => {
      this.product = x;
      this.products.getProductByParent(this.product.parentRef).forEach((y) => {
        let tempColor: colorId = <colorId>{};
        tempColor.color = y.color;
        tempColor.id = y.id;
        tempColor.name = y.name;
        this.colors.some((x) => x.color === y.color)
          ? null
          : this.colors.push(tempColor);
      });
    });
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
}
type colorId = { color: string; id: string; name: string };
