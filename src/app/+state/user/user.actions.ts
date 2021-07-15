import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[User] Load'
);

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


// export const userRegister = createAction(
//   '[User] Register',
//   props<{ props: any }>()
// );

// export const userRegisterSuccess = createAction(
//   '[User] Register Success',
//   props<{ props: any }>()
// );

// export const userRegisterError = createAction(
//   '[User] Register Error',
//   props<{ props: any }>()
// );
