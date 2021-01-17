import Formulario from './components/Formulario'
import { useState } from 'react';

function App() {

  // Array de turnos
  const [turnoS, guardarTurnoS] = useState([])

  // función que tome las citas actuales y agregue la nueva
  const crearTurno = turno => {
    guardarTurnoS([
      ...turnoS,
      turno
    ])
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearTurno={crearTurno}
              />
          </div>
          <div className="one-half column">
              2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
