import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserState } from 'src/app/+state/user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class ExternalGuard implements CanActivate {

  constructor(private router: Router, private store: Store, ) { }

  /*************** External Routing guard *************/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userInfo = null;
    this.store.select(selectUserState).subscribe(res => userInfo = res.user)
    if (userInfo) return true;
    this.router.navigate(['authenticate'], {queryParams: { path: decodeURIComponent(state.url)}}); //, {
    return true;
  }
}
