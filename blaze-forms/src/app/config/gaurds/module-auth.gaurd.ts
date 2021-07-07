import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ModuleAuthGuardComponent implements CanLoad {
  constructor(
    private router: Router) { }

  /*************** Layout Routing guard *************/
 
  canLoad(route: Route): boolean {
    if (localStorage.getItem('bforms')) return true;
    this.router.navigate(['/user/login']); //, { queryParams: { returnUrl: state.url } }
    return true;
  }
}
