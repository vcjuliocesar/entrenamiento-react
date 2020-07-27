import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Canciones from './components/Canciones';
import axios from 'axios';

function App() {
  
  const[busquedaletra,guardarBusquedaLetra] = useState({});
  const[letra,guardarLetra] = useState('');
  const[info, guardarInfo] = useState({});

  useEffect(()=>{
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () =>{
      
      const {artista,cancion} = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const[letra,informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);
      //const resultado = await axios.get(url);

      //guardarLetra(resultado.data.lyrics);
    };
    consultarApiLetra();
  },[busquedaletra]);
  
  return (
   <Fragment>
     <Formulario
      guardarBusquedaLetra={guardarBusquedaLetra}
     />
     <div className="container mt-5">
       <div className="row">
         <div className="col-md-6"></div>
         <div className="col-md-6">
          <Canciones
            letra={letra}
          />
         </div>
       </div>
     </div>
   </Fragment>
  );
}

export default App;
