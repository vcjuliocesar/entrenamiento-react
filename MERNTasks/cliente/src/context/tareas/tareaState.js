import React,{useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types/index';

const TareaSate = (props) => {
    const initialSate={
       tareas:[
        {nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {nombre:'Elegir Colores',estado:true,proyectoId:2},
        {nombre:'Elegir Plataformas de pago',estado:true,proyectoId:3},
        {nombre:'Elegir Hosting',estado:true,proyectoId:4},
        {nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {nombre:'Elegir Colores',estado:true,proyectoId:2},
        {nombre:'Elegir Plataformas de pago',estado:true,proyectoId:3},
        {nombre:'Elegir Hosting',estado:true,proyectoId:4},
        {nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {nombre:'Elegir Colores',estado:true,proyectoId:3},
        {nombre:'Elegir Plataformas de pago',estado:true,proyectoId:4},
        {nombre:'Elegir Hosting',estado:true,proyectoId:1},
        {nombre:'Elegir Plataforma',estado:true,proyectoId:4},
        {nombre:'Elegir Colores',estado:true,proyectoId:3},
        {nombre:'Elegir Plataformas de pago',estado:true,proyectoId:2},
        {nombre:'Elegir Hosting',estado:true,proyectoId:1}
       ],
       tareasproyecto:null 
    }

    //Create dispatch y state
    const [state,dispatch] = useReducer(tareaReducer,initialSate);
    //crear funciones

    //obtener tarea del proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type:TAREAS_PROYECTO,
            payload:proyectoId
        })
    }
    
    //agregar una tarea al proyecto seleccionado
    const agregarTarea = (tarea)=>{
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }
    return (
        <tareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaSate;