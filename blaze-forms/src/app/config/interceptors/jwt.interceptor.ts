import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { accessToken, selectUserState } from 'src/app/+state/user/user.selectors';
import { catchError } from 'rxjs/operators';
import { userLogout } from 'src/app/+state/user/user.actions';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  access_token: any = null;
  constructor(private store: Store, private router: Router) {
    this.store.select(accessToken).subscribe(res => this.access_token = res)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /********** add authorization header with jwt token if available **********/
    const token: string = this.access_token;
    if (token) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
          // 'X-Api-Version': '1',
          // 'Accept-language': this.user.language
        })
      });
    } else {
      request = request.clone({
        headers: new HttpHeaders({
          // 'X-Api-Version': '1',
          // 'Accept-language': this.user.language
        })
      });
    }

    const req = next.handle(request);
    // Code for error interceptor
    req.subscribe(
      res => { },
      catchError => {
        console.log(catchError)
        if (catchError.status === 401) {
          this.store.dispatch(userLogout());
          this.router.navigate(['/user/login']);
        }
      });
    return req;
  }
}
