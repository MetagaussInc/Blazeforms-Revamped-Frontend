import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardComponent implements CanActivate {
  constructor(
    private router: Router) { }

  /*************** Layout Routing guard *************/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('bforms')) return true;
    this.router.navigate(['/user/login']); //, { queryParams: { returnUrl: state.url } }
    return true;
  }
}
