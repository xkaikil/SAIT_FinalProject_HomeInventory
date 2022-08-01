import React from "react";
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

  //custom css
import './navbar.css';

//other componentes
import Inventory from './Inventory-View';
import Account from './Account-View';
import headerImg from '../assets/header.png';
import Logout from "./Logout";

let user = 'Guest';

const Navibar = () => {
  return (
    <Router>
	<div className="nav-wrapper">
		<header className="header">
		<Navbar className="navbar">
			<Container>
			<Navbar.Brand>
				<img src={headerImg} className='headerlogo'/>
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
					Account
				</Link>
				</Nav>

        <Nav>
				<Link to={"/logout"}
					className="nav-link">
					Logout
				</Link>
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
					element={<Account/>} />

				<Route path="/inventory"
					element={<Inventory/>} />
				

        <Route path="/logout"
					element={<Logout/>} />

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
