import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageCategory from "./ManageCategoryForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EditUser = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const onSubmit = (userObject) => {
    axios
      .put("http://localhost:4000/admin/update-category/" + id, userObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Category name successfully updated");
          //props.history.push("/user-list");
          navigate("/admin/view-category");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/update-category/" + id)
      .then((res) => {
        const { name} = res.data;
        setFormValues({ name});

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ManageCategory
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {t('profile.update')}
    </ManageCategory>
  );
};

export default EditUser;
