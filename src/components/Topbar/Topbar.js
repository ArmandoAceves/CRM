import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Topbar.css';
import { LogoutButton } from '../Logout';
import Sidebar1 from '../Sidebar/Sidebar1';

const Topbar = () => {
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="topbar">
      <Sidebar1 />
      <div className="profile-section" onClick={toggleDropdown}>
        <img src={user.picture} alt={user.name} className="profile-picture" />
        <span className="notification-badge">3</span> {/* Example notification count */}
      </div>
      {showDropdown && (
        <div className="dropdown-container">
          <div className="dropdown-content">
            <img src={user.picture} alt={user.name} className="imagen_usuario" />
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
            <hr className="dropdown-divider" />
            <button className="dropdown-button" onClick={() => alert('Redirigiendo al perfil...')}>View Profile</button>
            <div className="icons-container">
              <i className="pi pi-comment" />
              <i className="pi pi-envelope" />
              <i className="pi pi-calendar" />
            </div>
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;