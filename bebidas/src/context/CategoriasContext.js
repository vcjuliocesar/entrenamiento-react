import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
//crear el context
export const CategoriasContext = createContext();

//Provider es dende se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //crear state de context
    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url_categorias = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const resultado = await axios.get(url_categorias);
            guardarCategorias(resultado.data.drinks);
        }

        obtenerCategorias();
    }, []);
    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;