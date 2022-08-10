import axios from "axios";
import InventoryForm from "./InventoryForm";
import React, { useState } from "react";
import { useTranslation, Trans } from 'react-i18next';

const CreateItem = () => {
  const { t, i18n } = useTranslation();
  const [formValues, setFormValues] = useState({
    category: "",
    name: "",
    price: "",
  });
  const onSubmit = (itemObject) => {
    axios
      .post("http://localhost:4000/inventory/create-item", itemObject)
      .then((res) => {
        if (res.status === 200) alert("Item successfully created");
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
