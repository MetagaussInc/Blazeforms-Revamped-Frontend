import { createAction, props } from '@ngrx/store';


export const userLogin = createAction(
  '[User] Login',
  props<{ props: any }>()
);

export const userLogout = createAction(
  '[User] Logout'
);

export const userLoginSuccess = createAction(
  '[User] Login Success',
  props<{ props: any }>()
);

export const userLoginError = createAction(
  '[User] Login Error',
  props<{ props: any }>()
);
