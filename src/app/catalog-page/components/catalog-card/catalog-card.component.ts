import { Component } from '@angular/core';
import { fadeUp2, fadeUp3 } from 'src/app/share/services/animations';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css'],
  animations: [fadeUp2, fadeUp3],
})
export class CatalogCardComponent {
  url: string = urls.url;
}
