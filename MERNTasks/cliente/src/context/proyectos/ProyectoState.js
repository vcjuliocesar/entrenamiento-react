import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
 } from '../../types';



const ProyectoState = props => {
    
    const proyectos = [
        { id: 1, nombre: 'Tienda Virstual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio Web' },
        { id: 4, nombre: 'MERN' }
    ];

    const initialSate = {
        proyectos: [],
        formulario: false,
        errorformulario:false
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
    //agregar Nuevo Proyecto
    const agregarProyecto = (proyecto) => {
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload:proyecto
        })
    }

    //VALIDA FORMULARIO POR ERRORES
    const mostratError = () =>{
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario:state.errorformulario,
                mostratFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostratError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
