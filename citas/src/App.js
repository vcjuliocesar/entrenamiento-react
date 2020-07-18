import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //funcion que que toma las citas actuales y agrege la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  }

  //funcion para eliminar una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  const titulo = (citas.length > 0) ? 'Administra tus citas' : 'No hay citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {citas.map((cita) => {
              return (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita} 
                />
              )
            })}

          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
