import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoaderService } from './share/components/loader/services/loader.service';
import { UserManage } from './share/services/user-manage.service';

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
    private auth: UserManage
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loader.show.next(true);
        this.auth.isLogged();
      }
    });
  }
}
