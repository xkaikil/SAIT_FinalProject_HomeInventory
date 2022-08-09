// import { Route, Router } from "react-router-dom";
import "./App.css";
import { useTranslation, Trans } from 'react-i18next';

import Navibar from "./Components/Navbar";
import LanguageToggle from "./Components/LanguageToggle";

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' }
};

const App = () => {
  const { t, i18n } = useTranslation();
  return (
      <div className="App">
        <div className="body">
        <Navibar/>
        </div>
      </div>
  );
};

export default App;
