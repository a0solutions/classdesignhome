import { Component } from '@angular/core';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css'],
})
export class LivingComponent {
  url: string = urls.url;
  constructor() {}
}
