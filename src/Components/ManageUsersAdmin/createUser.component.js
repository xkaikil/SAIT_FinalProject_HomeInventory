import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageUsersForm from "./ManageUsersForm";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateUser = () => {
    const { t } = useTranslation();
    const [formValues, setFormValues] =
        useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "",
        });

    let navigate = useNavigate();

    const onSubmit = accountObject => {
        axios
            .post('http://localhost:4000/admin/create-user', accountObject)
            .then(res => {
                if (res.status === 200) {
                    alert('Registration successful')
                    navigate('/admin')
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))

    }

    return (
        <ManageUsersForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            {t('login.register')}
        </ManageUsersForm>
    )
}

export default CreateUser