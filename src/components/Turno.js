

const Turno = ({turno, eliminarTurno}) =>  (
    <div className="cita">
        <p>Mascota: <span>{turno.mascota}</span></p>
        <p>Dueño: <span>{turno.propietario}</span></p>
        <p>Fecha del turno: <span>{turno.fecha}</span></p>
        <p>Hora: <span>{turno.hora}</span></p>
        <p>Síntomas: <span>{turno.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarTurno(turno.id)}
        >Eliminar &times;</button>
    </div>

  );
 
export default Turno;