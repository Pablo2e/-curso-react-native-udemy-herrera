import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logOut'}
  | {type: 'changeUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favouriteIcon: undefined,
      };

    case 'changeFavIcon':
      return {
        ...state,
        favouriteIcon: action.payload,
      };

    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
