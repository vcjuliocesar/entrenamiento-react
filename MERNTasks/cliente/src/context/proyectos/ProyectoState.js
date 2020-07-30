import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';


const ProyectoState = props => {
    const initialSate = {
        formulario:false
    }

    //dispatch para ejecutar las acciones

    const[state,dispatch] = useReducer(proyectoReducer,initialSate);

    //serie de funciones para el CRUD

    return (
        <proyectoContext.Provider
            value={{
                formulario:state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
