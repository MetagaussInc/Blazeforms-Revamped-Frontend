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

export const userProfileUpdate = createAction(
  '[User] Profile Update',
  props<{ props: any }>()
);

export const userProfileImageUpdate = createAction(
  '[User] Profile Image Update',
  props<{ props: any }>()
);

export const userPlanDetailSuccess = createAction(
  '[User] User Plan Detail',
  props<{ props: any }>()
);

export const userWorkspaceDetailSuccess = createAction(
  '[User] User Workspace Detail',
  props<{ props: any }>()
);

export const updateUserPlanDetail = createAction(
  '[User] User Plan Detail Update',
  props<{ props: any }>()
);

export const updateCurrentWorkSpaceDetail = createAction(
  '[User] Update current workspace detail',
  props<{ props: any }>()
);

export const updateUserLoginAttempts = createAction(
  '[User] Update user login attempts',
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
