import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoaderService } from './share/components/loader/services/loader.service';
import { UserManage } from './share/services/user-manage.service';
import { TokenManage } from './share/services/token-manage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogged = false;
  title = 'classdesign';

  constructor(
    router: Router,
    private loader: LoaderService,
    private auth: TokenManage
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
}
