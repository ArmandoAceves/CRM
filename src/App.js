import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Dashboard from './Dashboard/Dashboard';
import Factura from './Pages/Factura/Factura';
import Clientes from './Pages/Clientes/Clientes';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  console.log('Is authenticated:', isAuthenticated); 
  console.log('Dashboard importado:', Dashboard); 
  
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Topbar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path='/Facturas' element={<Factura />}/>
            {/* Agrega más rutas aquí */}
          </Routes>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;