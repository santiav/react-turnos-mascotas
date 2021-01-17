

const Turno = ({turno}) =>  (
    <div className="cita">
        <p>Mascota: <span>{turno.mascota}</span></p>
        <p>Dueño: <span>{turno.propietario}</span></p>
        <p>Fecha del turno: <span>{turno.fecha}</span></p>
        <p>Hora: <span>{turno.hora}</span></p>
        <p>Síntomas: <span>{turno.sintomas}</span></p>
    </div>

  );
 
export default Turno;