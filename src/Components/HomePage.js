import { Button } from "react-bootstrap";
import {
    BrowserRouter as Router, Routes,
    Route, Link
  } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

import "./homepage.css";
import Fade from 'react-bootstrap/Fade';
const HomePage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="homepage-wrapper">

        <Fade in appear>
        <div className="description">
        <div className="d-flex flex-column">

        <h1>{t('home.tagline')}</h1>
        <h2>{t('home.description1')}</h2>
        <h2>{t('home.description2')}</h2>
        <h2>{t('home.description3')}</h2>
        </div>

        <Link to="/signup"><Button className="hp_button">{t('home.button')}</Button></Link>

        </div>
        </Fade>

        </div>
    )
}

export default HomePage;