import { useState } from 'react';
import Formulario from './components/Formulario'
import Turno from './components/Turno'

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
              <h2>Administra tus turnos</h2>
              {turnoS.map(item => (
                <Turno 
                  key={item.id}
                  turno={item}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
