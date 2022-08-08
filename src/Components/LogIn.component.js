import React, { useState } from "react";
import axios from "axios";
import LogInPageMaster from "./LogInPageMaster";

const LogIn = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const onSubmit = (accountObject) => {
        axios
            .post("http://localhost:4000/users/login", accountObject)
            .then((res) => {

                if (res.status === 200) {
                    alert("Login successful!!");
                }  else Promise.reject();
            })
            .catch((err) => {
                if (err.response) {
                    alert("Invalid Credentials");
                } else
                alert("Something went wrong")});
    };

    return (
        <LogInPageMaster initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            Log In
        </LogInPageMaster>
    );
}
export default LogIn;