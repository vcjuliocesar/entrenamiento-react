import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';



const ProyectoState = props => {
    
    const proyectos = [
        { id: 1, nombre: 'Tienda Virstual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio Web' },
        { id: 4, nombre: 'MERN' }
    ];

    const initialSate = {
        proyectos: [],
        formulario: false
    }

    //dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialSate);

    //serie de funciones para el CRUD
    const mostratFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }
    //obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type:OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostratFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
