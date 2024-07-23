import { Component, OnInit } from '@angular/core';
import { QuickViewService } from './service/quickView.service';
import { ProductManage, product } from '../../services/product-manage.service';
import { fade, fadeUp } from '../../services/animations';

@Component({
  selector: 'app-quick-view-modal',
  templateUrl: './quickViewModal.component.html',
  styleUrls: ['./quickViewModal.component.css'],
  animations: [fade, fadeUp],
})
export class QuickViewModalComponent implements OnInit {
  show: boolean;
  product: product = <product>{};
  category = '';
  reference = '';
  constructor(
    private alert: QuickViewService,
    private products: ProductManage
  ) {}

  ngOnInit() {
    this.alert.show$.subscribe((x) => {
      this.show = x;
    });
    this.alert.reference.subscribe((x) => {
      this.products.getProduct(x).subscribe((x) => {
        this.product = x;
      });
      this.products.setAllProducts().then(() => {
        this.category = <string>this.products.getCategoryById(x)?.category;
      });
    });
  }
  closeAlert() {
    this.alert.show$.next(false);
  }
  navigate(id: string, name: string) {
    this.closeAlert();
    window.open('product/' + id + '/' + name.replaceAll(' ', '_'), '_blank');
  }
}
