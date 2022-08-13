import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import CategoryTableRow from "./CategoryTableRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CategoryList = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/view-category")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return users.map((res, i) => {
      return <CategoryTableRow obj={res} key={i} style={{color: "lightblue"}}/>;
    });
  };

  return (
    <div className="table-wrapper">
      <h1>{t('admin.homeNventoryUserList')}</h1>

      <div>
        <Link to={"/admin/create-category"}>{t('admin.createCategory')}</Link>
      </div>
      <Table striped bordered hover>
        <thead style={{color: "lightblue",backgroundColor:"#151159"}}>
          <tr>
            <th>{t('admin.category')}</th>
            <th>{t('admin.action')}</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor: "#528cff"}}>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default CategoryList;
