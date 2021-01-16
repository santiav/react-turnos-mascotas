import {useState} from 'react';
import './componentes.css';

/*
app
    formulario (states: 2)




*/

const Formulario = () => {

    // Crear state de citas
    const [turno, actualizarTurno] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    })




    // función que se actualiza cada vez que el usuario escribe en un input
    const actualizarState = evento => {
        console.log("Propiedades de la etiqueta", evento)
        actualizarTurno({
            ...turno,
            //mascota: evento.target.value
             [ evento.target.name ] : evento.target.value
        })
    }

    // extraer valores (nos va a permitir resetear el formulario)
    const { mascota,propietario,fecha,hora,sintomas } = turno;

    // cuando se envia el formulario
    const submitTurno = evento => {
        evento.preventDefault()
        

        // validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) /* trim permite remover espacios en blanco*/ {
         
            return; // evita que se ejecute el codigo a continuacion
        }

        // asignar id

        // crear cita

        // reiniciar el form


    }


    return ( 
        <div id="formulario">
            <h2>Crear turno</h2>

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
