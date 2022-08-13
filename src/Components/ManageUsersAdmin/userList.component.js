import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserList = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/view-users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return users.map((res, i) => {
      return <UserTableRow obj={res} key={i} style={{color: "lightblue"}}/>;
    });
  };

  return (
    <div className="table-wrapper">
      <h1>{t('admin.homeNventoryUserList')}</h1>

      <div>
        <Link to={"/admin/create-user"}>{t('admin.createNewUser')}</Link>
      </div>
      <Table striped bordered hover>
        <thead style={{color: "lightblue",backgroundColor:"#151159"}}>
          <tr>
            <th>{t('admin.firstName')}</th>
            <th>{t('admin.lastName')}</th>
            <th>{t('admin.email')}</th>
            <th>{t('admin.password')}</th>
            <th>{t('admin.role')}</th>
            <th>{t('admin.status')}</th>
            <th>{t('admin.action')}</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor: "#528cff"}}>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default UserList;
