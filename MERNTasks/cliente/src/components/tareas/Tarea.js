import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({ tarea }) => {
    //obtener la funcion del contect de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;
    //funcion que se ejecuta cinaso el usuario presiona el btn eliminar tarea
    const tareaEliminar = (id) => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //funcion que modifica el estado de lastareas

    const cambiarEstado = (tarea) => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }
    
    //agregar una atrea actual cuando el usuario intenta editarla

    const selecconarTarea = (tarea)=>{
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selecconarTarea(tarea)}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;