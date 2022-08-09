import React, {useState, useEffect} from "react";
import axios from "axios";
import ManageUsersForm from "./ManageUsersForm";
import {useParams} from "react-router-dom";

const EditUser = (props) => {
    const {id} = useParams();
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const onSubmit = (userObject) => {
        axios
            .put("http://localhost:4000/users/update-user/" + id, userObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("User successfully updated");
                    props.history.push("/user-list");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    }

    useEffect(() => {
        axios
            .get("http://localhost:4000/users/update-user/" + id)
            .then((res) => {
                const {firstName, lastName, email, password} = res.data;
                setFormValues({firstName, lastName, email, password});
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ManageUsersForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update User
        </ManageUsersForm>
    );
};

export default EditUser;