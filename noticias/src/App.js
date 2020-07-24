import React, { Fragment, useState,useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [categoria,guardarCategoria] = useState('');
  const [noticias,guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () =>{
      
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=564ed659b3224bb29719e9dfb8019d2a`;
      
      const respuesta = await fetch(url);

      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header
        titulo={'Buscador de Noticias'}
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
