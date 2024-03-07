import { Component } from '@angular/core';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css'],
})
export class CatalogCardComponent {
  url: string = urls.url;
  constructor() {}
}
