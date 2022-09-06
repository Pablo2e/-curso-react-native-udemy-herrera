import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

//definir como luce, que información voy a tener aqui
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favouriteIcon?: string;
}

//lo usaremos para decirle a react que expone y como luce el context

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavouriteIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}

//estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favouriteIcon: undefined,
};

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeFavouriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavouriteIcon,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
