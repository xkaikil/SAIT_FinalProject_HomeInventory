import React, {useState} from "react";
import axios from "axios";
import LogInPageMaster from "./LogInPageMaster";

const LogIn = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const onSubmit = (accountObject) => {
        axios
            .get("http://localhost:4000/users/login", {params: {
                email: accountObject.email,
                password: accountObject.password,
            }})
            .then((res) => {

                if (res.status === 200) {
                    alert(JSON.stringify(res));
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    return (
        <LogInPageMaster initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            Log In
        </LogInPageMaster>
    );
}
export default LogIn;