import { Component, HostListener, OnInit } from '@angular/core';
import { fade } from '../../services/animations';

@Component({
  selector: 'app-goUp',
  templateUrl: './goUp.component.html',
  styleUrls: ['./goUp.component.css'],
  animations: [fade],
})
export class GoUpComponent implements OnInit {
  scrolled: boolean = false;
  constructor() {}
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.scrollAble();
  }
  ngOnInit() {}
  goUp(): void {
    window.scrollTo(0, 0);
  }
  scrollAble() {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 200) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
