import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageCategoryForm from "./ManageCategoryForm";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateCategory = () => {
    const { t } = useTranslation();
    const [formValues, setFormValues] =
        useState({
            firstName: "",
        });
        
    let navigate = useNavigate();

    const onSubmit = accountObject => {
        console.log("creating ")
        axios
            .post('http://localhost:4000/admin/create-category', accountObject)
            .then(res => {
                if (res.status === 200) {
                    alert('Category Created')
                    navigate("/admin/view-category")
                
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))

    }

    return (
        <ManageCategoryForm initialValues={formValues} 
        onSubmit={onSubmit} enableReinitialize>
            {t('login.register')}
        </ManageCategoryForm>
    )
}

export default CreateCategory