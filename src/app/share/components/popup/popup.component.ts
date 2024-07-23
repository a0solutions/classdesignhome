import {
  ProductManage,
  product,
} from 'src/app/share/services/product-manage.service';
import { popup } from '../headers/popous/popups';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from '../../services/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [fade],
})
export class PopupComponent implements OnInit {
  popup_active = false;
  @Input() data: popup = {
    top: '27',
    left: '50',
    reference: 'DOR 03-BHQM2N',
  };
  product: product;
  constructor(private products: ProductManage, private http: Router) {}

  ngOnInit(): void {
    this.products.getProduct(this.data.reference).subscribe((x) => {
      this.product = x;
    });
  }

  navigate(id: string, name: string): void {
    this.http.navigate(['product/' + id + '/' + name]);
  }
  desactive(event: boolean) {
    this.popup_active = event;
  }
}
