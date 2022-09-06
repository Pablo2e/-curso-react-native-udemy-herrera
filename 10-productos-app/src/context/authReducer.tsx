/* eslint-disable prettier/prettier */
import { Usuario } from '../interfaces/appInterfaces';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'non-authenticated';
  token: string | null;
  errorMessage: string;
  user: Usuario | null;
}

type AuthAction =
    | {type: 'signUp', payload: { token: string, user: Usuario}}
    | {type: 'addError', payload: string}
    | {type: 'removeError'}
    | {type: 'notAutenticated'}
    | {type: 'logout'}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'non-authenticated',
                token: null,
                errorMessage: action.payload,
            };

        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            };

        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user,
            };

        case 'logout':
        case 'notAutenticated':
            return {
                ...state,
                status: 'non-authenticated',
                token: null,
                user: null,
            };

        default:
            return state;
    }
};
