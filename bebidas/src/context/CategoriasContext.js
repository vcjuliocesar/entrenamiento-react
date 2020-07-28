import React,{createContext,useState} from 'react';

//crear el context
export const CategoriasContext = createContext();

//Provider es dende se encuentran las funciones y state
const CategoriasProvider = (props) => {
    
    //crear state de context
    const [hola,guardarHola] = useState('hola');

    return(
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;