import React, { useEffect, useState } from 'react';
import Formulario from './components/Formlario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  //state de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes,guardarImagenes] = useState([]);

  useEffect(()=>{
    const consultarApi = async () =>{
      
      if(busqueda === '') return;

      const imagenesPorPagina = 10;
      const key = '17636869-386a91d620fde7af267292499';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
    }
    consultarApi();
  },[busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <ListadoImagenes
        imagenes={imagenes}
      />
    </div>
  );
}

export default App;
