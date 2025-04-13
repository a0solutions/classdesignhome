import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoaderService } from './share/components/loader/services/loader.service';
import { TokenManage } from './share/services/token-manage.service';
import { AlertManage } from './share/components/alerts/services/alertManage.service';
import { filter, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLogged = false;
  title = 'classdesign';

  constructor(
    router: Router,
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
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.popupShow();
    }, 15000);
  }
  popupShow() {
    this.alertPopup.showPopup.next(true);
  }
}
