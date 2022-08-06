import React, {useState} from "react";
import axios from "axios";
import SignUpForm from "./SignUpForm";

const RegisUser = () => {
    const [formValues, setFormValues] = 
        useState ({firstName: '', lastName:'', email: '', password:''})
    const onSubmit = accountObject => {
        axios
        .post('http://localhost:4000/signup/users/create-user', accountObject)
        .then(res => {
            if (res.status === 200)
            alert('Registration successful')
            else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }
    return (
        <SignUpForm initialValue = {formValues} onSubmit = {onSubmit} enableReinitialize>
            Register
        </SignUpForm>
    )
}

export default RegisUser