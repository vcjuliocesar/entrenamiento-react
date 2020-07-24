import React,{useState} from 'react';

const useSelect = (stateInicial,opciones) => {

    // state de el custom hook
    const[state,actualizarState] = useState('');

    const selectNoticias = () =>{
        return (  
            <select
                className="browser-default"
            >
                <option value="">Seleccione</option>
            </select>
        );
    }

    return [state,selectNoticias];
}
 
export default useSelect;