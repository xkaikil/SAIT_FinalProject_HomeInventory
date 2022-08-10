import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            logout: 'Log Out',
            login: 'Log In',
            inventory: 'Inventory',
            guest: 'Guest'
          },
          home: {
            tagline: 'Inventory your belongings with HOME nVentory',
            description1: 'Find the right insurance that you need',
            description2: 'Make filing claims hassle free',
            description3: 'it\'s free and easy to use!',
            button: 'Start inventorying now!'
          },
          login: {
            alreadyHaveAnAccount: "Already have an account?",
            firstName: "First Name",
            languageChosen: "English",
            languagePreference: "Language Preference",
            lastName: "Last Name",
            newUser: "New User",
            password: "Password",
            register: "Register"
          }
        }
      },
      fr: {
        translation: {
            navbar: {
                logout: 'Se déconnecter',
                login: 'Connexion',
                inventory: 'Inventaire',
                guest: 'l\' invité'
            },
            home: {
              tagline: 'Inventoriez vos biens avec HOME nVentory',
              description1: 'Trouvez la bonne assurance dont vous avez besoin',
              description2: 'Simplifiez le dépôt des réclamations',
              description3: 'C\'est gratuit et facile à utiliser!',
              button: 'Commencez à faire l\'inventaire maintenant!'
            },
            login: {
                alreadyHaveAnAccount: "Vous avez déjà un compte?",
                firstName: "Le prénom",
                languageChosen: "Français",
                languagePreference: "Préférence de Langue",
                lastName: "Le nom de famille",
                newUser: "Nouvel utilisateur",
                password: "Le mot de passe",
                register: "Inscrire"
            }
        }
      }
    }
  });

export default i18n;
