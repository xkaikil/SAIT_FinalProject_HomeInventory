import React from "react";
import { useTranslation} from 'react-i18next';
import Cookies from 'js-cookie';
import "./LanguageToggle.css";

const LanguageToggleNavBar = () => {
  var lngPref = Cookies.get('languagePreference');
  const {i18n} = useTranslation();
  if (lngPref == 'fr') {
    if (document.getElementById('lng_toggle_signup')) {
    document.getElementById('lng_toggle_signup').checked = true;
    }
  return (
    <label className="switch">
        <input type="checkbox" id="lng_toggle_navbar" defaultChecked onClick={() => {
            var checked = document.getElementById('lng_toggle_navbar').checked;
            if (checked) {
              i18n.changeLanguage("fr");
              Cookies.set('languagePreference', 'fr');
              if (document.getElementById('lng_toggle_signup')) {
              document.getElementById('lng_toggle_signup').checked = true;
              }
            } else {
              i18n.changeLanguage("en");
              Cookies.set('languagePreference', 'en');
              if (document.getElementById('lng_toggle_signup')) {
                document.getElementById('lng_toggle_signup').checked = false;
              }
            }
        }}></input>
        <span className="slider"/>
    </label>
  );
      } else {
        return (
          <label className="switch">
              <input type="checkbox" id="lng_toggle_navbar" onClick={() => {
                  var checked = document.getElementById('lng_toggle_navbar').checked;
                  if (checked) {
                    i18n.changeLanguage("fr");
                    Cookies.set('languagePreference', 'fr');
                    if (document.getElementById('lng_toggle_signup')) {
                    document.getElementById('lng_toggle_signup').checked = true;
                    }
                  } else {
                    i18n.changeLanguage("en");
                    Cookies.set('languagePreference', 'en');
                    if (document.getElementById('lng_toggle_signup')) {
                      document.getElementById('lng_toggle_signup').checked = false;
                    }
                  }
              }}></input>
              <span className="slider"/>
          </label>
        );
      }
};

export default LanguageToggleNavBar;

