import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO} from '../../types';

const ProyectoState = props => {
    const initialSate = {
        formulario:false
    }

    //dispatch para ejecutar las acciones

    const[state,dispatch] = useReducer(proyectoReducer,initialSate);

    //serie de funciones para el CRUD
    const mostratFormulario = () =>{
        dispatch({
            type:FORMULARIO_PROYECTO
        });
    }

    return (
        <proyectoContext.Provider
            value={{
                formulario:state.formulario,
                mostratFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
