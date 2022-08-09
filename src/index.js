import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";

import { createRoot } from 'react-dom/client';


// import i18n (needs to be bundled ;))
import './Components/i18n.js';

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);