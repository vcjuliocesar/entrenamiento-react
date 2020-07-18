import React from 'react';

const Cita = ({ cita }) => {
    return (
        <div className="cita">
            <p>Mascota:<samp>{cita.mascota}</samp></p>
            <p>Dueño:<samp>{cita.propietario}</samp></p>
            <p>Fecha:<samp>{cita.fecha}</samp></p>
            <p>Hora:<samp>{cita.hora}</samp></p>
            <p>Sintomas:<samp>{cita.sintomas}</samp></p>
        </div>
    );
}

export default Cita;