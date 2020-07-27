import React, { useState } from 'react';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const[error,guardarError] = useState(false);

    const {artista,cancion} = busqueda;

    const actualizarState = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value,
        });
    }

    const buscarInfo = (e) =>{
        e.preventDefault();

        //validar
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        
        guardarError(false);
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            value={artista}
                                            onChange={actualizarState}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            value={cancion}
                                            onChange={actualizarState}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;