import React from 'react';
import './CSS/Login.css'; // Asegúrate de importar el archivo de estilos CSS

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="#" method="post">
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <div className="forgot-password">
          <a href="#">Registrate nuevo</a>
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
