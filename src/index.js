import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-i1t5ykium30c0wfz.us.auth0.com"
      clientId="ssbrNNnU0snnlL2hVbSyyeVdAqZD9HcH"
      authorizationParams={{
        redirect_uri: "https://ArmandoAceves.github.io/CRM"
      }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>
  );
  
  reportWebVitals();