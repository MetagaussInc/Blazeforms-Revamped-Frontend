import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  user: any;
}

export const initialState: State = {
  user: null
};


export const reducer = createReducer(
  initialState,
  on(UserActions.userLogin, state => state),
  on(UserActions.userLoginSuccess, (state, action) => {
    console.log(action)
    localStorage.setItem('bforms', JSON.stringify({user: action.props.user, access_token: action.props.access_token}));
    return {
      user: action.props.user,
      isUserLoggedin: true,
      apiCompleted: true
    };
  }),
  on(UserActions.userLoginError, (state, action) => {
    console.log(action)
    return {
      user: null,
      isUserLoggedin: false,
      apiCompleted: true
    }
  }),
  on(UserActions.userLogout, (state, action) => {
    localStorage.removeItem('bforms');
    console.log(localStorage)

    return state
  }),
);

