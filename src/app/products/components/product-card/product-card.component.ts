import { Component, Input, OnInit } from '@angular/core';
import {
  ProductManage,
  colorId,
  product,
} from '../../../share/services/product-manage.service';
import { fadeButtonCard } from 'src/app/share/services/animations';
import { TokenManage } from 'src/app/share/services/token-manage.service';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { QuickViewService } from 'src/app/share/components/quickViewModal/service/quickView.service';
import { urls } from 'src/environments/environment';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [fadeButtonCard],
})
export class ProductCardComponent implements OnInit {
  @Input() product: product;
  @Input() favorites = false;
  colors: colorId[] = [];
  background = '';
  hover = false;
  like = false;
  dealType: string;
  url = urls.url;
  constructor(
    private products: ProductManage,
    private token: TokenManage,
    private alert: AlertManage,
    private quickView: QuickViewService
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
      this.product.category +
      '/products/' +
      this.product.parentRef +
      '/' +
      this.product.sets +
      '/' +
      this.product.color +
      '/1.webp';
    this.background = encodeURI(this.background);
    this.products.allLikes.subscribe((x) => {
      this.like = this.products.isLike(this.product.reference);
    });
    this.dealType = this.products.getDeal(this.product);
  }
  changeBackgound(InOut: number): void {
    let url =
      urls.url +
      'classapi/images/' +
      this.product.category +
      '/products/' +
      this.product.parentRef +
      '/' +
      this.product.sets +
      '/' +
      this.product.color +
      '/';
    url = encodeURI(url);
    InOut == 1
      ? this.imageExists(url + '2.webp')
      : (this.background = url + '1.webp');
  }
  imageExists(url: string): void {
    const image = new Image();
    image.src = url;
    image.width != 0 ? (this.background = url) : null;
  }
  dataProcess(products: product[]) {
    products.forEach((y) => {
      const tempColor: colorId = <colorId>{};
      tempColor.color = y.color;
      tempColor.id = y.id;
      tempColor.name = y.name;
      if (!this.favorites) {
        this.colors.some((x) => x.color === y.color)
          ? null
          : this.colors.push(tempColor);
      }
    });
  }
  navigateModal(id: string): void {
    this.quickView.reference.next(id);
    this.quickView.show$.next(true);
  }
  navigate(id: string, name: string) {
    window.open('product/' + id + '/' + name.replaceAll(' ', '_'), '_blank');
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
      this.products.postLikes(ref).subscribe((x) => {
        this.like = !this.like;
        this.products.getAllLikes();
      });
    } else {
      this.alert.setAlertMessage('isLogOut');
    }
  }
  urlImage(color: string): string {
    return encodeURI(this.url + 'classapi/images/app/colors/' + color + '.png');
  }
}
