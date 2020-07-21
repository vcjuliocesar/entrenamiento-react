import React, { useState } from 'react';

const Formulario = () => {
    //state del formulario
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const [error,guardarError] = useState(false);

    //extrer ciudad y pais
    const { ciudad, pais } = busqueda;

    const handleChange = (e) => {
        //actualizar es state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        
        guardarError(false);
        //pasarlo al componente principal
        
    }

    return (

        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-2 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="id">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un páis --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waver-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

export default Formulario;