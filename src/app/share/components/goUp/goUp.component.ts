import { Component, HostListener } from '@angular/core';
import { fade } from '../../services/animations';

@Component({
  selector: 'app-goup',
  templateUrl: './goUp.component.html',
  styleUrls: ['./goUp.component.css'],
  animations: [fade],
})
export class GoUpComponent {
  scrolled = false;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.scrollAble();
  }

  goUp(): void {
    window.scrollTo(0, 0);
  }
  scrollAble() {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 200) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
