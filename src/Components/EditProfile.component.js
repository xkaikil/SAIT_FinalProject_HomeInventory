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

    const onSubmit = (accoutnObject) => {
        axios
        .put(
            //Add in user profile db location at the end of the url
            "http://localhost:27017/homeNventory/users" + id, accoutnObject
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
            "http://localhost:27017/homeNventory/users" + id
        )
        .then ((res) => {
            const { firstName, lastName, email, password, admin } = res.data;
            setFormValues({ firstName, lastName, email, password, admin });
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <SignUpForm initialValue = {formValues} onSubmit = {onSubmit} enableReinitialize>
            update User
        </SignUpForm>
    );
};

export default EditProfile;