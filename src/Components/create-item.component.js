import axios from "axios";
import InventoryForm from "./InventoryForm";
import React, { useState } from "react";

const CreateItem = () => {
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
      Add item
    </InventoryForm>
  );
};

export default CreateItem;
