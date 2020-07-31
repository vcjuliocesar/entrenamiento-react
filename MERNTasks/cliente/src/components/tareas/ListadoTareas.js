import React,{Fragment,useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';

const ListadoTareas = () => {
    
    //obtener el state del 
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Seleciona un proyecto</h2>
    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto=[
        {nombre:'Elegir Plataforma',estado:true},
        {nombre:'Elegir Colores',estado:true},
        {nombre:'Elegir Plataformas de pago',estado:true},
        {nombre:'Elegir Hosting',estado:true}
    ];
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    
                    :tareasProyecto.map(tarea=>(
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar proyecto &times;</button>
        </Fragment>
        
     );
}
 
export default ListadoTareas;