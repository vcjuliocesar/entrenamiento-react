import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import MensajeError from './Error';
import PropTypes from 'prop-types';

const Boton = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#FFF;
    transition:background-color .3s ease;

    &:hover{
        background-color:#326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda,guardarCriptomoneda}) => {

    //state del listado de criptomonedas 
    const [listacripto, guardarCriptomonedas] = useState([]);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
    ];

    //utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);

    //utilozar useCriptomoneda
    const [criptomoneda, SeleccionarCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);

    //state error
    const [error, guardarError] = useState(false);

    //ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    const cotizarMoneda = (e) => {
        e.preventDefault();

        if (moneda === '' || criptomoneda === '') {
            guardarError(true);
            return false;
        }

        //enviar datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <MensajeError mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMonedas />
            <SeleccionarCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

Formulario.propTypes={
    guardarMoneda:PropTypes.func.isRequired,
    guardarCriptomoneda:PropTypes.func.isRequired
}

export default Formulario;