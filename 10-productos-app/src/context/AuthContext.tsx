/* eslint-disable prettier/prettier */
import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import cafeApi from '../api/cafeApi';

import { LoginData, LoginResponse, RegisterData, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'non-authenticated'
    signUp: ( registerData: RegisterData) => void;
    signIn: ( loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const AuthInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any)=> {

    const [state, dispatch] = useReducer(authReducer, AuthInicialState);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');

        //No token, no autorizado
        if (!token) {return dispatch({type: 'notAutenticated'});}

        //hay token
        const resp = await cafeApi.get('/auth');
        if (resp.status !== 200){
            return dispatch({type:'notAutenticated'});
        }

        await AsyncStorage.setItem('token', resp.data.token);
        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario,
            },
        });
    };


    const signIn = async ({correo, password}: LoginData) => {
        try {
            const {data} = await cafeApi.post<LoginResponse>('/auth/login', {correo, password} );
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario,
                },
            });

            await AsyncStorage.setItem('token', data.token);

        } catch (error: any) {
            console.log(error.response.data.msg);
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta',
            });
        }
    };

    const signUp = async ({nombre, correo, password}: RegisterData) => {
        try {
            const {data} = await cafeApi.post<LoginResponse>('/usuarios', {nombre, correo, password} );
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario,
                },
            });

            await AsyncStorage.setItem('token', data.token);

        } catch (error: any) {
            console.log(error.response.data.msg);
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la información',
            });
        }
    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'logout'});
    };

    const removeError = () => {
        dispatch({
            type: 'removeError',
        });
    };


    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
