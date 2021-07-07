import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /********** add authorization header with jwt token if available **********/
    // const token: string = this.user.userToken;
    // if (token) {
    //   request = request.clone({
    //     headers: new HttpHeaders({
    //       Authorization: `Bearer ${token}`,
    //       'X-Api-Version': '1',
    //       'Accept-language': this.user.language
    //     })
    //   });
    // } else {
    //   request = request.clone({
    //     headers: new HttpHeaders({
    //       'X-Api-Version': '1',
    //       'Accept-language': this.user.language
    //     })
    //   });
    // }

    return next.handle(request);
  }
}
