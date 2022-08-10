import React, {useState, useEffect} from "react";
import axios from "axios";
//Import the profile form here
import { useParams } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const EditProfile = (prop) => {
    const {id} = useParams();
    const [formValues, setFormValues] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: ""
    });

    const onSubmit = (accountObject) => {
        axios
        .put(
            "http://localhost:4000/users/update-user" + id, accountObject
        )
        .then((res) => {
            if (res.status == 200) {
                alert("Account successfully updated");
                prop.history.push("/users");
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    useEffect(() => {
        axios
        .get(
            "http://localhost:4000/users/update-user" + id
        )
        .then ((res) => {
            const { firstName, lastName, email, password, admin } = res.data;
            setFormValues({ firstName, lastName, email, password, admin });
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <SignUpForm initialValue = {formValues} onSubmit = {onSubmit} enableReinitialize>
            {t('profile.updateUser')}
        </SignUpForm>
    );
};

export default EditProfile;