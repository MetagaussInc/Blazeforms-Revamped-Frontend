import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExternalGuard implements CanActivate {

  constructor() { }

  /*************** External Routing guard *************/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (!this.user.userToken) { return true; }
    // this.user.toHome();
    return false;
  }
}
