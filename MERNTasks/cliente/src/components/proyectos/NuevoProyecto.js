import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostratFormulario, agregarProyecto, mostratError } = proyectosContext;
    //state del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer informacion del state
    const { nombre } = proyecto;

    //lee input
    const onChange = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //validar el proyecto
        if (nombre === '') {
            mostratError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto);

        //Reiniciar form
        guardarProyecto({
            nombre: ''
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostratFormulario()}
            >Nuevo Proyecto</button>
            {formulario ?
                (<form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                    />
                </form>)
                : null}
                {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>:null}
        </Fragment>
    );
}

export default NuevoProyecto;