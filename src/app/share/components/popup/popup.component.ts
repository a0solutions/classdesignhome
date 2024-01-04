import { popup } from '../headers/popous/popups';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  popup_active: boolean = false;
  @Input() data: popup = {
    top: '',
    left: '',
    name: '',
    description: '',
    price: 0,
    category: '',
  };
  constructor() {}

  ngOnInit() {}
  hoverproducts(nth: boolean) {
    this.popup_active = !this.popup_active;
  }
}
