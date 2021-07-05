import { createAction, props } from '@ngrx/store';

export const uSERUsers = createAction(
  '[User] USER Users'
);

export const uSERUsersSuccess = createAction(
  '[User] USER Users Success',
  props<{ data: any }>()
);

export const uSERUsersFailure = createAction(
  '[User] USER Users Failure',
  props<{ error: any }>()
);
