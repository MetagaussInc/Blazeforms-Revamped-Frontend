import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userLogout } from 'src/app/+state/user/user.actions';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err);
      switch (err.status) {
        case 401:
          /********** Auto logout if 401 response returned from api **********/
        this.store.dispatch(userLogout());
          this.router.navigate(['/user/login']);
          break;
        default:
          /********** Check for other serve-side errors **********/
          console.log('API error', err);
        //   this.message.toast('error', err.error.message);
          break;
      }
        return throwError(err);
    }));
  }
}
