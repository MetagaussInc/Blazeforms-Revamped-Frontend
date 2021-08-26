import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';
import { HttpService } from 'src/app/config/rest-config/http.service';



@Injectable()
export class UserEffects {

  userLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.userLogin),
      concatMap((action: any) => {
        return this.http.call(action.props.mappingKey, 'POST', action.props.payload).pipe(
          map(data => {
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

  seconAPICALL$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.userLoginSuccess),
      concatMap((action: any) => {
        console.log(action.props.user.Id)
        const payload = {
          UserId: action.props.user.Id,
          WorkspaceId: action.props.user.WorkspaceDetail.Id,
        }
        return this.http.call('getUserPlanDetailByWorkspace', 'POST', payload).pipe(
          map(data => {
              const props = {...data};
              return UserActions.secondAPICallSuccess({ props })
           
          }))
      })
    );
  });

  // userRegister$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(UserActions.userRegister),
  //     concatMap((action: any) => {
  //       return this.http.call(action.props.mappingKey, 'POST', action.props.payload).pipe(
  //         map(data => {
  //           if (data.success) {
  //             const props = {...data};
  //             return UserActions.userRegisterSuccess({ props })
  //           } else {
  //             const props = {...data};
  //             return UserActions.userRegisterError({ props })
  //           }
  //         }))
  //     })
  //   );
  // });

  constructor(private actions$: Actions, private http: HttpService) { }

}
