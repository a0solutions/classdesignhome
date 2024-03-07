import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { headerManage } from './popous/popups';
import { urls } from '../../services/apiurl';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnChanges {
  @Input() headerName: string = '';
  @ViewChild('header') myDiv: ElementRef;
  backgroundImage: string = '';
  popups: any = [];
  headerNameUrl: string;
  url: string = urls.url;
  constructor(private headerManage: headerManage) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.headerNameUrl = this.headerName.replaceAll(' ', '_');
    this.popups = [];
    if (this.headerManage.getPopups(this.headerName).length != 1) {
      this.popups = this.headerManage.getPopups(this.headerName);
    }
  }

  draggableSet(): void {
    const ele = this.myDiv.nativeElement;
    ele.style.cursor = 'grab';
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    const mouseDownHandler = function (e: any): void {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';
      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };
    const mouseMoveHandler = function (e: any): void {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = function (): void {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
  }
}
