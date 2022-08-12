import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import react from 'react';
import UserList from "./userList.component";
const Admin = () => {
    return (
        <div className="adminNav">
            <h1>Admin View</h1>


            <Navbar>
                <Nav>
                    
                   <Link to='/admin/view-users'>Users</Link> 
                    
                </Nav>
            </Navbar>

            {/* <Routes>
            <Route path="/admin/view-users" element={<UserList />} />
            </Routes> */}
        </div>
    )
}


export default Admin;