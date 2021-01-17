import { useState } from 'react';
import Formulario from './components/Formulario'
import Turno from './components/Turno'

function App() {

  // Array de turnos
  const [turnoS, guardarTurnoS] = useState([])

  // FUNCIÓN que tome las citas actuales y agregue la nueva
  const crearTurno = turno => {
    guardarTurnoS([
      ...turnoS,
      turno
    ])
  }

  // FUNCIÓN que elimina un turno por su ID
  const eliminarTurno = id => {
    const turnosActualizados = turnoS.filter(turno => turno.id !== id)
    guardarTurnoS(turnosActualizados)
  }

  // titulo condicional de la columna 2
  const tituloColumnaDerecha = turnoS.length === 0 ? 'No hay turnos' : 'Administrá tus turnos';


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
              <h2>{tituloColumnaDerecha}</h2>
              {turnoS.map(item => (
                <Turno 
                  key={item.id}
                  turno={item}
                  eliminarTurno={eliminarTurno}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
