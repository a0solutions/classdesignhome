import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenManage } from '../token-manage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private auth: TokenManage, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.getValidateToken() != null) {
      this.auth.token = this.auth.getValidateToken();
      if (!this.auth.tokenExpired()) {
        this.auth.isLogged.next(true);
        return true;
      } else {
        this.router.navigate(['/signin'], {
          queryParams: { returnTo: state.url },
        });
        return false;
      }
    } else {
      return false;
    }
  }
}
