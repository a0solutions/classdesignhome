import { Component } from '@angular/core';
import { urls } from 'src/app/share/services/apiurl';

@Component({
  selector: 'bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css'],
})
export class BedComponent {
  url: string = urls.url;
  constructor() {}
}
