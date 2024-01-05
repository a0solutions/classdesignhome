import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { headerManage } from './popous/popups';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnChanges {
  @Input() headerName: string = '';
  backgroundImage: string = '';
  popups: any = [];
  constructor(private headerManage: headerManage) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.popups = [];
    if (this.headerManage.getPopups(this.headerName).length != 1) {
      this.popups = this.headerManage.getPopups(this.headerName);
    }
  }

  scrollChange(mouse: any) {
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
