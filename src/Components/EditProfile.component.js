import React, {useState, useEffect} from "react";
import axios from "axios";
//Import the profile form here
import { useParams } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { useTranslation} from 'react-i18next';
import { useNavigate } from "react-router-dom";

const EditProfile = (prop) => {
    const {t} = useTranslation();

    let user = JSON.parse(localStorage.getItem('user'));

   let id = user.id;
    let navigate = useNavigate();
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
            "http://localhost:4000/admin/update-user/" + id, accountObject
        )
        .then((res) => {
            if (res.status == 200) {
                alert("Account successfully updated");
                navigate('/account');
            } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    useEffect(() => {
        axios
        .get(
            "http://localhost:4000/admin/update-user/" + id
        )
        .then ((res) => {
            const { firstName, lastName, email, password, role } = res.data;
            setFormValues({ firstName, lastName, email, password, role });
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <SignUpForm initialValues = {formValues} onSubmit = {onSubmit} enableReinitialize>
            {t('profile.update')}
        </SignUpForm>
    );
};

export default EditProfile;