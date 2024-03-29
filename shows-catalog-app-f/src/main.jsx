import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithNavigate from "./components/Auth/AuthProvider.jsx";
const container = document.getElementById("root");
const root = createRoot(container);
 

root.render(
  <Router>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </Router>
);


