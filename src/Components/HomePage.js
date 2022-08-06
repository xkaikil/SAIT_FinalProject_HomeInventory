import { Button } from "react-bootstrap";
import {
    BrowserRouter as Router, Routes,
    Route, Link
  } from "react-router-dom";
import "./homepage.css";
import Fade from 'react-bootstrap/Fade';
const HomePage = () => {
    
    return (
        <div className="homepage-wrapper">

        <Fade in appear>
        <div className="description">
        <div className="d-flex flex-column">

        <h1>Inventory your belongings with HOME nVentory</h1>
        <h2>Find the right insurance that you need</h2>
        <h2>Make filing claims hassle free</h2>
        <h2>it's free and  easy to use!</h2>
        </div>

        <Link to="/signup"><Button className="hp_button">Start inventorying now!</Button></Link>

        </div>
        </Fade>

        </div>
    )
}

export default HomePage;