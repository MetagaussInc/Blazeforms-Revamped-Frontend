import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo, selectUserState } from 'src/app/+state/user/user.selectors';

@Injectable({
  providedIn: 'root'
})

export class ModuleAuthGuardComponent implements CanLoad {
  constructor(
    private router: Router, private store: Store) { }

  /*************** Layout Routing guard *************/
 
  canLoad(route: Route): boolean {
    let userInfo = null;
    this.store.select(selectUserState).subscribe(res => userInfo = res.user)
    if (userInfo) return true;
    this.router.navigate(['authenticate'], {queryParams: { path: route.path}}); //, { queryParams: { returnUrl: state.url } }
    return true;
  }
}
