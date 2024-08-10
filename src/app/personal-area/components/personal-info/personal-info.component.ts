import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/share/components/loader/services/loader.service';
import { fadeUp } from 'src/app/share/services/animations';
import { Checkout, order } from 'src/app/share/services/checkout.service';
import {
  product,
  ProductManage,
} from 'src/app/share/services/product-manage.service';
import { UserManage } from 'src/app/share/services/user-manage.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  animations: [fadeUp],
})
export class PersonalInfoComponent implements OnInit {
  allOrders: Observable<order[]>;
  branch: any = '';
  allProducts: product[] = [];
  allLiked: product[] = [];
  constructor(
    private orders: Checkout,
    private user: UserManage,
    private routerActive: ActivatedRoute,
    private loader: LoaderService,
    private productService: ProductManage
  ) {}

  ngOnInit(): void {
    this.routerActive.paramMap.subscribe((x) => {
      x.get('branch') ? (this.branch = x.get('branch')) : (this.branch = '');
      this.loader.show.next(false);
      this.loader.show.subscribe((x) => {
        console.log(this.loader.show.value);
      });
    });

    this.allOrders = this.orders.getUserOrders();
    this.productService.setAllProducts().then((z) => {
      this.productService.allLikes.subscribe((x) => {
        x.forEach((y) => {
          this.allProducts = this.allProducts.concat(
            this.productService.getProductByParent(y)[0]
          );
        });
      });
    });
  }
  signOut() {
    this.user.signOut();
  }
}
