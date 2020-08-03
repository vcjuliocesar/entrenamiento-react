import React,{useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types/index';

const TareaSate = (props) => {
    const initialSate={
       tareas:[
        {id:1,nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {id:2,nombre:'Elegir Colores',estado:true,proyectoId:2},
        {id:3,nombre:'Elegir Plataformas de pago',estado:true,proyectoId:3},
        {id:4,nombre:'Elegir Hosting',estado:true,proyectoId:4},
        {id:5,nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {id:6,nombre:'Elegir Colores',estado:true,proyectoId:2},
        {id:7,nombre:'Elegir Plataformas de pago',estado:true,proyectoId:3},
        {id:8,nombre:'Elegir Hosting',estado:true,proyectoId:4},
        {id:9,nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {id:10,nombre:'Elegir Colores',estado:true,proyectoId:3},
        {id:11,nombre:'Elegir Plataformas de pago',estado:true,proyectoId:4},
        {id:12,nombre:'Elegir Hosting',estado:true,proyectoId:1},
        {id:13,nombre:'Elegir Plataforma',estado:true,proyectoId:4},
        {id:14,nombre:'Elegir Colores',estado:true,proyectoId:3},
        {id:15,nombre:'Elegir Plataformas de pago',estado:true,proyectoId:2},
        {id:16,nombre:'Elegir Hosting',estado:true,proyectoId:1}
       ],
       tareasproyecto:null,
       errortarea:false
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
    //valida y muestra un erro
    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    //eliminar tarea
    const eliminarTarea = (id) => {
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    }
    return (
        <tareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errortarea:state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaSate;