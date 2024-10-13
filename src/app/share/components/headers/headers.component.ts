/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { urls } from 'src/environments/environment';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnChanges {
  @Input() showroom: any;
  @ViewChild('header') myDiv: ElementRef;
  backgroundImage = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  popups: any = [];
  url: string = urls.url;
  img: string;
  constructor() {}

  ngOnChanges(): void {
    this.img = this.showroom.img;
    this.popups = JSON.parse(this.showroom.popups);
  }
}
