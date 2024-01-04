import { Component, Input } from '@angular/core';
import { headerManage, popup } from './popous/popups';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent {
  @Input() headerName: string = '';
  backgroundImage: string = '';

  constructor(private headerManage: headerManage) {}
  popups: any = this.headerManage;

  scrollChange(mouse: any) {
    console.log();
    if (mouse.clientX < 150) {
      document.getElementById('header')!.scrollLeft -= 300;
    } else if (
      mouse.clientX >
      document.getElementById('header')!.offsetWidth - 150
    ) {
      document.getElementById('header')!.scrollLeft += 300;
    }
  }
  moveMouse(mouse: any) {
    if (mouse.clientX < 150) {
      document.getElementById('header')!.style.cursor = 'e-resize';
    } else if (
      mouse.clientX >
      document.getElementById('header')!.offsetWidth - 150
    ) {
      document.getElementById('header')!.style.cursor = 'w-resize';
    } else {
      document.getElementById('header')!.style.cursor = 'default';
    }
  }
}
