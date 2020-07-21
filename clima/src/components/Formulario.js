import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                <label htmlFor="id">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                >
                    <option value="">-- Seleccione un páis --</option>
                </select>
                <label htmlFor="pais">Ciudad:</label>
            </div>
        </form>
     );
}
 
export default Formulario;