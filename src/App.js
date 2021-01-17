import { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Turno from './components/Turno'
import PropTypes from 'prop-types'

function App() {

  // turnos en local storage
  let turnosIniciales = JSON.parse(localStorage.getItem('turnos')) // obj pasa a json
  if (!turnosIniciales) {
    turnosIniciales = [];
  }

  // Array de turnos
  const [turnoS, guardarTurnoS] = useState(turnosIniciales)

  // useEffect para realizar operaciones cuando el state cambia (siempre es arrow function) es como "document.ready"
  useEffect( () => {
    if (turnosIniciales) {
      localStorage.setItem('turnos', JSON.stringify(turnoS)) // json pasa a string
    } else {
      localStorage.setItem('turnos', JSON.stringify([]))
    }
  }, [turnoS]) // el array como 2do parámetro permite que no cicle una api, porque sólo se ejecutará una vez (a la vez, el state dentro, se actualizará 'array de dependencias')

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

Formulario.propTypes = {
  crearTurno: PropTypes.func.isRequired
}

export default App;
