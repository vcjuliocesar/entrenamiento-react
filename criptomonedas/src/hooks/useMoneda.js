import React, { Fragment, useState } from 'react';

const useMoneda = () => {
    
    //state de nuestro custom hook
    const [state,actualizarState] = useState('');

    const Seleccionar = () => {
        return (
            <Fragment>
                <label>Moneda</label>
                <select>
                    <option value="MXN">Peso Mexicano</option>
                </select>
            </Fragment>
        );
    }

    //retornar state,interfaz y fn que modifica el state
    return [state,Seleccionar,actualizarState];
}

export default useMoneda;