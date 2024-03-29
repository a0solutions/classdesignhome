import { Component } from '@angular/core';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'bath',
  templateUrl: './bath.component.html',
  styleUrls: ['./bath.component.css'],
})
export class BathComponent {
  popup_active: number = 0;
  url: string = urls.url;
  constructor() {}
}
