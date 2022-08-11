import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const UserTableRow = (props) => {
    const {_id, firstName, lastName, email, password} = props.obj;

    const deleteUser = () => {
        axios
            .delete("http://localhost:4000/admin/delete-user/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("User Successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    }

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>
                <Link className="edit-link" to={"/edit-user/" + _id}>
                    Edit
                </Link>
                <Button onClick={deleteUser} size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );

};

export default UserTableRow;