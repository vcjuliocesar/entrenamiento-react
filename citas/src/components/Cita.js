import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita,eliminarCita }) => {
    return (
        <div className="cita">
            <p>Mascota:<samp>{cita.mascota}</samp></p>
            <p>Dueño:<samp>{cita.propietario}</samp></p>
            <p>Fecha:<samp>{cita.fecha}</samp></p>
            <p>Hora:<samp>{cita.hora}</samp></p>
            <p>Sintomas:<samp>{cita.sintomas}</samp></p>
            <button 
                className="button eliminar u-full-width"
                onClick={()=>eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
    );
}
//documentar
Cita.propTypes = {
    cita:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired
}
export default Cita;