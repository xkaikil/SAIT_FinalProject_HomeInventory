import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { useTranslation} from 'react-i18next';



const RegisUser = () => {
    const {t} = useTranslation();
    let navigate = useNavigate();



    const [formValues, setFormValues] =
        useState({ firstName: '', lastName: '', email: '', password: '', role: '' , status: 'Activated'})
    
    const onSubmit = accountObject => {
        console.log(accountObject)
        axios
            .post('http://localhost:4000/users/create-user', accountObject)
            .then(res => {
                if (res.status === 200){

                
                    alert("User Registered Successfully");
              
    
                  navigate("/emailVerification/" + "huangjason812@gmail.com");
                }
              
                   
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))

    }
    return (
        <SignUpForm initialValue={formValues} onSubmit={onSubmit} enableReinitialize>
            {t('login.register')}
            
        </SignUpForm>
    )
}

export default RegisUser