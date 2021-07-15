import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  user: any;
  access_token: any;
}

export const initialState: UserState = {
  user: null,
  access_token: null
};


export const reducer = createReducer(
  initialState,
  // on(UserActions.userLogin, state => state),
  on(UserActions.loadUser, state => {
    const bForms: any = localStorage.getItem('bforms');
    return {
      user: JSON.parse(bForms)?.user,
      access_token: JSON.parse(bForms)?.access_token
    };
  }),
  on(UserActions.userLoginSuccess, (state, action) => {
    console.log(action)
    localStorage.setItem('bforms', JSON.stringify({user: action.props.user, access_token: action.props.access_token}));
    return {
      user: action.props.user,
      isUserLoggedin: true,
      apiCompleted: true,
      access_token: action.props.access_token
    };
  }),
  on(UserActions.userLoginError, (state, action) => {
    console.log(action)
    return {
      user: null,
      isUserLoggedin: false,
      apiCompleted: true,
      access_token: null
    }
  }),
  on(UserActions.userLogout, (state, action) => {
    localStorage.removeItem('bforms');
    console.log(localStorage)

    return state
  }),
);

