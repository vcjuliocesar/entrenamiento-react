import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';

const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color:#FFF;
  padding:3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario></ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
