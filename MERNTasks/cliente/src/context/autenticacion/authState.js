import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clieteAxios from '../../config/axios';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESSION
} from '../../types';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';


const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    //funciones
    const registrarUsuarios = async (datos) => {
        try{
            const respuesta = await clieteAxios.post('/api/usuarios',datos);
            console.log(respuesta.data);
            dispatch({
                type:REGISTRO_EXITOSO,
                payload:respuesta.data
            });
            //Obtener el usuario
            usuarioAutenticado();
        }catch(error){
            console.log(error);
            const alerta = {
                msg:error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type:REGISTRO_ERROR,
                payload:alerta
            });
        }
    }

    //retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');

        if(token){
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            console.log(respuesta);
            dispatch({
                type:OBTENER_USUARIO,
                payload:respuesta.data.usuario
            })
        } catch (error) {
            console.log(error.response);
            dispatch({
                type:LOGIN_ERROR
            });
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuarios
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;