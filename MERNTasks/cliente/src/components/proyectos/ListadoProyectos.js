import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    //extraer proyectos de state inical
    const proyectosContext = useContext(proyectoContext);
    const {proyectos,obtenerProyectos} = proyectosContext;
    //obtener proectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos();
    },[]);
    //validar si hay proyectos
    if(proyectos.length === 0) return <p>No hay proyectos</p>;

    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;