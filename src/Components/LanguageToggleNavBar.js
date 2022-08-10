import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import "./LanguageToggle.css";

const lngs = {
  true: { nativeName: 'English' },
  false: { nativeName: 'French' }
};

const LanguageToggleNavBar = ({ label }) => {
  const { t, i18n } = useTranslation();
  return (
    <label className="switch">
        <input type="checkbox" id="lng_toggle_navbar" onClick={() => {
            var checked = document.getElementById('lng_toggle_navbar').checked;
            if (checked) {
              i18n.changeLanguage("fr");
              if (document.getElementById('lng_toggle_signup')) {
              document.getElementById('lng_toggle_signup').checked = true;
              }
            } else {
              i18n.changeLanguage("en");
              if (document.getElementById('lng_toggle_signup')) {
                document.getElementById('lng_toggle_signup').checked = false;
              }
            }
        }}></input>
        <span className="slider"/>
    </label>
  );
};

export default LanguageToggleNavBar;

