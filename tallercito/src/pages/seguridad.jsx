import React, { useState } from 'react';
import './CSS/Seguridad.css';

const Seguridad = () => {
  return (
    <div className="center-box">
      <div className="confirmation-wait-container">
        <h2>Esperando confirmación de correo</h2>
        <p>
          Gracias por registrarte. Se ha enviado un correo electrónico de confirmación.
          Por favor, verifica tu correo electrónico y sigue las instrucciones para completar el proceso de registro.
        </p>
      </div>
    </div>
  );
};

export default Seguridad;
