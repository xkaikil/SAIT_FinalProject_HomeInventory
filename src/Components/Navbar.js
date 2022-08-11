import React from "react";
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//translation
import { useTranslation } from "react-i18next";

//custom css
import "./navbar.css";

//other componentes
import Inventory from "./Inventory-View";
import Account from "./Account-View";
import headerImg from "../assets/header_dark.png";
import Logout from "./Logout";
import HomePage from "./HomePage";
import SignUp from "./Registration.component";
import LogIn from "./LogIn.component";
import LanguageToggleNavBar from "./LanguageToggleNavBar";
import Verification from "./EmailVerification";
import CreateItem from "./create-item.component";
import InventoryList from "./InvList.component";
import EditItem from "./Edit-item.component";
import UserList from "./ManageUsersAdmin/userList.component";
import EditUser from "./ManageUsersAdmin/editUser.component";
import CreateUser from "./ManageUsersAdmin/createUser.component";

const Navibar = () => {
  const { t } = useTranslation();
  const [user, setUser] = React.useState({
    name: "Guest",
    id: null,
  });

  let logInOut;
  console.log(user.id + user.name);


  if (user.id === null) {
    logInOut = (
      <Link to={"/login"} className="nav-link">
        {t('navbar.login')}
      </Link>
    );
  } else {
    logInOut = (
      <Link to={"/logout"} className="nav-link">
        {t('navbar.logout')}
      </Link>
    )
  }


  React.useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user);

      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  let adminLink;
  if (user.role === 'admin') {
    adminLink =
      <Nav>
        <Link to={'/admin/view-users'} className="nav-link">Admin</Link>
      </Nav>
  }
  return (
    <Router>
      <div className="nav-wrapper">
        <header className="header">
          <Navbar className="navbar" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"}>
                  <img src={headerImg} className="headerlogo" />
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/inventory"} className="nav-link">
                    {t('navbar.inventory')}
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/account"} className="nav-link">
                    {user.name}
                  </Link>
                </Nav>

                {adminLink}
                <Nav>{logInOut}</Nav>


              </Nav>
              <LanguageToggleNavBar />
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/account" element={<Account />} />

                  <Route path="/inventory" element={<InventoryList />} />

                  <Route
                    path="/inventory/create-item"
                    element={<CreateItem />}
                  />

                  <Route
                    path="/inventory/edit-item/:id"
                    element={<EditItem />}
                  />

                  <Route path="/logout" element={<Logout />} />

                  <Route path="/" element={<HomePage />} />

                  <Route path="/login" element={<LogIn />} />

                  <Route path="/signup" element={<SignUp />} />

                  <Route path="/admin/*" element={<UserList />} />
                  <Route path="/admin/view-users" element={<UserList />} />
                  <Route
                    path="/admin/edit-user/:id"
                    element={<EditUser />}
                  />


                  <Route
                    path="/admin/create-user"
                    element={<CreateUser />}
                  />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}


export default Navibar;
