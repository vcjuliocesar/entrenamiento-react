import React,{useEffect,useState,createContext} from 'react';
import axios from 'axios';

//crear context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state provider
    const[idreceta,guardarIdReceta] = useState(null);
    const[recetaInfo,gurardarReceta] = useState({});
    //consulta a la api
    useEffect(()=>{
        const obtenerReceta = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);
            gurardarReceta(resultado.data.drinks[0]);
        }

        obtenerReceta();
    },[idreceta]);

    return (  
        <ModalContext.Provider
            value={{
                recetaInfo,
                guardarIdReceta,
                gurardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;