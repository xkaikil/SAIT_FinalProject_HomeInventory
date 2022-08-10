import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from "react-cookie";
import { createRoot } from 'react-dom/client';


// import i18n (needs to be bundled ;))
import './Components/i18n.js';

const root = createRoot(document.getElementById('root'))
root.render(
  <CookiesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CookiesProvider>
);