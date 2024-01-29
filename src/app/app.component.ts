import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoaderService } from './share/components/loader/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'classdesign';
  @ViewChild('mainContent')
  private mainContentDiv!: ElementRef<HTMLElement>;
  constructor(router: Router, private loader: LoaderService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loader.show.next(true);
      }
    });
  }

  onActivate(_event: any): void {
    if (this.mainContentDiv) {
      (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
    }
  }
}
