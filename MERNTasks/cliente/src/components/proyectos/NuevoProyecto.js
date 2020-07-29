import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {
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

        //agregar al state

        //Reiniciar form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form 
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
            </form>
        </Fragment>
    );
}

export default NuevoProyecto;