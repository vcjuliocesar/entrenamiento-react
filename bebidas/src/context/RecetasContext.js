import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, guardarRecetas] = useState([]);
    const [consultar, guardarConsultar] = useState(false);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });

    useEffect(() => {
        
        const {categoria,nombre}= busqueda;

        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const resultado = await axios.get(url);
                guardarRecetas(resultado.data.drinks);
                //console.log(resultado.data.drinks);
            }

            obtenerRecetas();
        }
    }, [busqueda,consultar]);

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;