import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';
import { HttpService } from 'src/app/config/rest-config/http.service';



@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UserActions.userLogin),
      concatMap((action: any) => {
        console.log(action)
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        return this.http.call(action.props.mappingKey, 'POST', action.props.payload).pipe(
          map(data => {
            console.log(data)
            if (data.success) {
              const props = {...data};
              return UserActions.userLoginSuccess({ props })
            } else {
              const props = {...data};
              return UserActions.userLoginError({ props })
            }
          }))
      })
    );
  });



  constructor(private actions$: Actions, private http: HttpService) { }

}
