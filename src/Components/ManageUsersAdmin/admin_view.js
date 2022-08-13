import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import react from 'react';
import UserList from "./userList.component";
import { useTranslation} from 'react-i18next';

const Admin = () => {
    const {t} = useTranslation();
    return (
        <div className="adminNav">
            <h1>{t('admin.adminView')}</h1>


            <Navbar>
                <Nav>
                    
                   <Link to='/admin/view-users'>
                    <button className="createItem">{t('admin.users')}</button>
                    </Link> 
                    
                </Nav>
            </Navbar>

            {/* <Routes>
            <Route path="/admin/view-users" element={<UserList />} />
            </Routes> */}
        </div>
    )
}


export default Admin;