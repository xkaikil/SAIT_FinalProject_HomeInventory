import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageUsersForm from "./ManageUsersForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EditUser = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    status: "",
  });

  const onSubmit = (userObject) => {
    axios
      .put("http://localhost:4000/admin/update-user/" + id, userObject)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully updated");
          //props.history.push("/user-list");
          navigate("/admin");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/update-user/" + id)
      .then((res) => {
        console.log("UseEffect ----------");
        console.log(res.data);
        const { firstName, lastName, email, password, role, status} = res.data;
        setFormValues({ firstName, lastName, email, password, role, status });

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ManageUsersForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {t('profile.update')}
    </ManageUsersForm>
  );
};

export default EditUser;
