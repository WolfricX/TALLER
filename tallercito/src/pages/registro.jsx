import React, { useState } from 'react';

const Registro = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contrasena: '',
    correo_electronico: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistro = async () => {
    try {
      const response = await fetch('https://localhost:3000/usuarios/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Usuario registrado con éxito.');
        // Indicar que el registro fue exitoso y redirigir
        setRegistroExitoso(true);
      } else {
        console.error('Error al registrar el usuario.');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud de registro.', error);
    }
  };

  // Si el registro fue exitoso, redirigir a la página de confirmación
  if (registroExitoso) {
  }

  return (
    <div>
      <h2>Registro</h2>
      <label>Usuario:</label>
      <input type="text" name="usuario" onChange={handleInputChange} />

      <label>Contraseña:</label>
      <input type="password" name="contrasena" onChange={handleInputChange} />

      <label>Correo Electrónico:</label>
      <input type="email" name="correo_electronico" onChange={handleInputChange} />

      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default Registro;
