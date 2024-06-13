import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Bienvenido a Fútbol Fino</h1>
        <h2 className="login-subtitle">Administración de visitas y clientes</h2>
        <button onClick={() => loginWithRedirect()} className="custom-button">
          <span>Ingresar</span>
        </button>
      </div>
    </div>
  );
}

export default LoginButton;