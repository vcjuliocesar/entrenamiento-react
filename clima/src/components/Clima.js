import React from 'react';

const Clima = ({ resultado }) => {
    //extraer valores de resultado
    const { name, main } = resultado;

    const kelvin = 273.15;
    
    if(!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima en {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Maxima :
                    {parseFloat(main.temp_max - kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperarura Minima :
                    {parseFloat(main.temp_min - kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}

export default Clima;