import {useState} from 'react';
import { nanoid } from 'nanoid'
import './componentes.css';

/*
app (states: 1)
    formulario (states: 2)


*/

const Formulario = ({crearTurno}) => {

    // Crear state de citas
    const [turno, actualizarTurno] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    })

    // Validación: si hay error (true, false)
    const [error, actualizarError ] = useState(false)


    // FUNCIÓN -----------
    // función que se actualiza cada vez que el usuario escribe en un input
    const actualizarState = evento => {
        // console.log("Propiedades de la etiqueta", evento)
        actualizarTurno({
            ...turno,
            //mascota: evento.target.value
             [ evento.target.name ] : evento.target.value
        })
    }

    // extraer valores (nos va a permitir resetear el formulario)
    const { mascota,propietario,fecha,hora,sintomas } = turno;

    // FUNCIÓN -----------
    // cuando se envia el formulario
    const submitTurno = evento => {
        evento.preventDefault()

        // validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) /* trim permite remover espacios en blanco*/ {
            actualizarError(true);
            return; // evita que se ejecute el codigo a continuacion
        }

        // pasó la validación y entonces continua ejecutando el código
        // ---------------

        // eliminar mensaje de error (si quedó en true por un intento anterior)
        actualizarError(false)

        // asignar id
        turno.id = nanoid();
        console.log(turno)

        // almacenar turno gracias a la función en app.js
        crearTurno(turno)

        // reiniciar el form
        actualizarTurno({
            mascota: '',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        })

    }


    return ( 
        <div id="formulario">
            <h2>Crear turno</h2>

            
            { /* Si error es true, se muestra */ error ? <p className="alerta-error">Campos obligatorios</p>: null }

            <form
                onSubmit={submitTurno}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar turno</button>
            </form>
        </div>

     );
}
 
export default Formulario
