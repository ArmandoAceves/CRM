import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button className="topbar-button" onClick={() => logout()}> {/* Agregamos una clase de estilo al botón */}
            Cerrar Sesión {/* Texto más claro para el botón */}
        </button>
    )
}