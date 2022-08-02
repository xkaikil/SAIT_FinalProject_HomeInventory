import React from "react";
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";

//custom css
import './navbar.css';

//other componentes
import Inventory from './Inventory-View';
import Account from './Account-View';
import headerImg from '../assets/header.png';
import Logout from "./Logout";
import HomePage from "./HomePage";
import LoginPage from './LoginPage';


const Navibar = (props) => {
  let userName = props.user;
  let logInOut =

    <Link to={"/logout"}
      className="nav-link">
      Logout
    </Link>


  if (props.loggedIn == 'false') {
    logInOut =

      <Link to={"/login"}
        className="nav-link">
        LogIn
      </Link>

  }
  return (
    <Router>
      <div className="nav-wrapper">
        <header className="header">
          <Navbar className="navbar">
            <Container>
              <Navbar.Brand>
                <Link to={"/"}>
                  <img src={headerImg} className='headerlogo' />
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/inventory"}
                    className="nav-link">
                    Inventory
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/account"}
                    className="nav-link">
                    {userName}
                  </Link>
                </Nav>

                <Nav>
                  {logInOut}
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/account"
                    element={<Account />} />

                  <Route path="/inventory"
                    element={<Inventory />} />


                  <Route path="/logout"
                    element={<Logout />} />

                  <Route path="/"
                    element={<HomePage />} />

                  <Route path="/login"
                    element={<LoginPage/>} />

                </Routes>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  )
}

export default Navibar;
