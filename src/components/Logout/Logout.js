import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    // Obtiene la función de cierre de sesión del hook useAuth0
    const { logout } = useAuth0();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = () => {
        setIsLoading(true);
        logout({ returnTo: "https://ArmandoAceves.github.io/CRM" });
    };

    return (
        // Renderiza un botón que llama a la función de cierre de sesión al hacer clic
        <button onClick={handleLogout} disabled={isLoading} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            {isLoading ? 'Cerrando sesión...' : 'Salir'}
        </button>
    );
};