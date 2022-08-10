import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import "./LanguageToggle.css";

const lngs = {
  true: { nativeName: 'English' },
  false: { nativeName: 'French' }
};

const LanguageToggleSignUp = ({ label }) => {
  const { t, i18n } = useTranslation();
  return (
    <label className="switch">
        <input type="checkbox" id="lng_toggle_signup" onClick={() => {
            var checked = document.getElementById('lng_toggle_signup').checked;
            if (checked) {
              i18n.changeLanguage("fr");
              console.log("FRENCH");
              document.getElementById('lng_toggle_navbar').checked = true;
            } else {
              i18n.changeLanguage("en");
              console.log("ENGLISH");
              document.getElementById('lng_toggle_navbar').checked = false;
            }
        }}></input>
        <span className="slider"/>
    </label>
  );
};

export default LanguageToggleSignUp;

