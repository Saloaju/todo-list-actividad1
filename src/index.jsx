import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// Es obligatorio importar el CSS de Bootstrap para que funcionen los componentes
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
