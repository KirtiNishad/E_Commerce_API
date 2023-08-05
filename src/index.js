import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gdctdwm8mmwisxfy.us.auth0.com"
    clientId="7ilyzNiZJbUyOuO1rRimIkoKvNjjk8eF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  
);