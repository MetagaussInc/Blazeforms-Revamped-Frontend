import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
  ActivatedRoute,
  UrlSegment
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo, selectUserState } from 'src/app/+state/user/user.selectors';

@Injectable({
  providedIn: 'root'
})

export class ModuleAuthGuardComponent implements CanLoad {
  constructor(
    private router: Router, private store: Store, private routee: ActivatedRoute) { }

  /*************** Layout Routing guard *************/
 
  canLoad(route: Route, segments:UrlSegment[]): boolean {
    let userInfo = null;
    this.store.select(selectUserState).subscribe(res => userInfo = res.user)
    if (userInfo) return true;
    // console.log(JSON.stringify(route))
    // console.log(JSON.stringify(segments))
    // console.log(JSON.stringify(this.routee.snapshot.queryParams))
    this.router.navigate(['authenticate'], {queryParams: { path: route.path}}); //, { queryParams: { returnUrl: state.url } }
    return true;
  }
}
