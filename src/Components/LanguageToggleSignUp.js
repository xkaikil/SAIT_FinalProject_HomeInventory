import React from "react";
import { useTranslation} from 'react-i18next';
import Cookies from 'js-cookie';
import "./LanguageToggle.css";

const LanguageToggleSignUp = () => {
  var lngPref = Cookies.get('languagePreference');
  const { i18n } = useTranslation();
  if (lngPref == 'fr'){
    if (document.getElementById('lng_toggle_navbar')) {
    document.getElementById('lng_toggle_navbar').checked = true;
    }
  return (
    <label className="switch">
        <input type="checkbox" id="lng_toggle_signup" defaultChecked onClick={() => {
            var checked = document.getElementById('lng_toggle_signup').checked;
            if (checked) {
              i18n.changeLanguage("fr");
              Cookies.set('languagePreference', 'fr');
              document.getElementById('lng_toggle_navbar').checked = true;
            } else {
              i18n.changeLanguage("en");
              Cookies.set('languagePreference', 'en');
              document.getElementById('lng_toggle_navbar').checked = false;
            }
        }}></input>
        <span className="slider"/>
    </label>
  );
    } else {
        return (
            <label className="switch">
                <input type="checkbox" id="lng_toggle_signup" onClick={() => {
                    var checked = document.getElementById('lng_toggle_signup').checked;
                    if (checked) {
                      i18n.changeLanguage("fr");
                      Cookies.set('languagePreference', 'fr');
                      document.getElementById('lng_toggle_navbar').checked = true;
                    } else {
                      i18n.changeLanguage("en");
                      Cookies.set('languagePreference', 'en');
                      document.getElementById('lng_toggle_navbar').checked = false;
                    }
                }}></input>
                <span className="slider"/>
            </label>
          );
    }
};

export default LanguageToggleSignUp;

