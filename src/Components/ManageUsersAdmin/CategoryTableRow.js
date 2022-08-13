import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation} from 'react-i18next';

const CategoryTableRow = (props) => {
  const {t} = useTranslation();
  const { _id, name, } = props.obj;

  const deleteUser = () => {
    axios
      .delete("http://localhost:4000/admin/delete-category/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("User Successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <Link className="edit-link" to={"/admin/edit-category/" + _id}>
        {t('admin.edit')}
        </Link>
     {/* Deletion is not required for category but this does work
      <Button onClick={deleteUser} size="sm" variant="danger">
     {t('admin.delete')}
       </Button>
       */}
      </td>
    </tr>
  );
};

export default CategoryTableRow;
