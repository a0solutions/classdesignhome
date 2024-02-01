import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenManage } from 'src/app/personal-area/services/token-manage.service';
import { UserManage } from 'src/app/signin/services/user-manage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private auth: UserManage,
    private router: Router,
    private token: TokenManage
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let activo: boolean = this.auth.isLogged();
    if (!activo) return true;
    this.auth.signOut();
    this.router.navigate(['/signin'], {
      queryParams: { returnTo: state.url },
    });
    return false;
  }
}
