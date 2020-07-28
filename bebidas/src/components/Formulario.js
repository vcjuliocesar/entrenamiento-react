import React from 'react';

const Formulario = () => {
    return (  
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Selecciona Categoría --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        name="submit"
                        className="btn btn-primary btn-block"
                        value="Buscar Recetas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;