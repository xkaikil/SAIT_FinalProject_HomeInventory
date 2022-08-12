import axios from "axios";
import InventoryForm from "./InventoryForm";
import React, { useState } from "react";
import { useTranslation} from 'react-i18next';
import { useNavigate } from "react-router-dom";
const CreateItem = () => {
  const { t} = useTranslation();
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('user'));

  const [formValues, setFormValues] = useState({
    category: "",
    name: "",
    price: "",
    ownerId: user.id
  });
  const onSubmit = (itemObject) => {
    axios
      .post("http://localhost:4000/inventory/create-item", itemObject)
      .then((res) => {
        if (res.status === 200) {
        alert("Item successfully created");
        navigate('/inventory');
        }
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <InventoryForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {t('inventory.addItem')}
    </InventoryForm>
  );
};

export default CreateItem;
