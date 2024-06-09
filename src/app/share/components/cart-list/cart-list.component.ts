import { Component } from '@angular/core';
import { product } from 'src/app/share/services/product-manage.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  list: product[] = [];
  subtotal = 0;
}
