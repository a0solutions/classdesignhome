/* eslint-disable no-var */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './share/components/loader/services/loader.service';
import { TokenManage } from './share/services/token-manage.service';
import { AlertManage } from './share/components/alerts/services/alertManage.service';
import { filter, Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare var gtag: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLogged = false;
  title = 'classdesign';
  private subscriptions: Subscription = new Subscription();
  constructor(
    private router: Router,
    private loader: LoaderService,
    private auth: TokenManage,
    private alertPopup: AlertManage
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loader.show.next(true);
        if (this.auth.getValidateToken() != null) {
          this.auth.token = this.auth.getValidateToken();
          if (!this.auth.tokenExpired()) {
            this.auth.isLogged.next(true);
          }
        }
      }
    });
    this.subscriptions.add(
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          gtag('config', 'G-MLFJBJ5B1H', {
            ' page_path': event.urlAfterRedirects,
          });
        }
      })
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.popupShow();
    }, 15000);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-MLFJBJ5B1H', {
          ' page_path': event.urlAfterRedirects,
        });
      }
    });
  }
  popupShow() {
    this.alertPopup.showPopup.next(true);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
