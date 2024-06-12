import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-y3y54fv3nzorqoci.us.auth0.com"
      clientId="pijdAn7mrjdX4ecmvhL2M7S6ZQ8mZ4U4"
      authorizationParams={{
        redirect_uri: "https://ArmandoAceves.github.io/CRM"
      }}
    >
      <App />
    </Auth0Provider>,
  );

reportWebVitals();