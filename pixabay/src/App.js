import React, { useEffect, useState } from 'react';
import Formulario from './components/Formlario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  //state de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {

      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const key = '17636869-386a91d620fde7af267292499';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      //guardar total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);
    }
    consultarApi();
  }, [busqueda]);

  const paginaAnterior = ()=>{
    const nuevaPaginaActual= paginaactual -1;

    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = ()=>{
    const nuevaPaginaActual= paginaactual +1;

    if(nuevaPaginaActual > totalpaginas) return;
    
    guardarPaginaActual(nuevaPaginaActual);
  }

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

      <button
        type="button"
        className="btn btn-info mr-1"
        onClick={paginaAnterior}
      >&laquo; Anterior</button>

      <button
        type="button"
        className="btn btn-info"
        onClick={paginaSiguiente}
      >Siguiente &raquo;</button>
    </div>
  );
}

export default App;
