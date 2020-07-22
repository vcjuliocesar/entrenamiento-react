import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error,guardarError] = useState(false);

  //extrer ciudad y pais
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = '1c69ab7a70f7b1d748254c0fc63354ad';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
        
        //detectar si hay error
        if(resultado.cod === '404'){
          guardarError(true);
        }else{
          guardarError(false);
        }
      }

      //http://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=1c69ab7a70f7b1d748254c0fc63354ad
    }
    consultarAPI();
  }, [consultar]);

  let componente;
  
  //carga condicional de componentes
  if(error){
    componente = <Error mensaje="No hay resultados"/>
  }else{
    componente = <Clima resultado={resultado}/>;
  }

  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>

      </div>
    </Fragment>

  );
}

export default App;
