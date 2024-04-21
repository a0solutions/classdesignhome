import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from './share/components/loader/services/loader.service';
import { TokenManage } from './personal-area/services/token-manage.service';
import { SeoService } from './share/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogged: boolean = false;
  title = 'classdesign';
  @ViewChild('mainContent')
  private mainContentDiv!: ElementRef<HTMLElement>;
  constructor(
    router: Router,
    private loader: LoaderService,
    private token: TokenManage
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loader.show.next(true);
        this.token.isUserLogged();
      }
    });
  }
  onActivate(e: Event, outlet: HTMLElement) {
    outlet.scrollTop = 0;
  }
}
