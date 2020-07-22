import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => {
        return (
            <Fragment>
                <label>{label}</label>
                <select
                    onChange={e => actualizarState(e.target.value)}
                    value={state}
                >
                    <option value="">-- Seleccione --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
                </select>
            </Fragment>
        );
    }

    //retornar state,interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;