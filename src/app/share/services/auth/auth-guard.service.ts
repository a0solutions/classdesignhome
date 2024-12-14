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
    const activo: boolean = this.auth.isLogged.value;
    console.log(this.auth.isLogged.value);
    if (activo) return true;
    this.auth.logOut();
    this.router.navigate(['/signin'], {
      queryParams: { returnTo: state.url },
    });
    return false;
  }
}
