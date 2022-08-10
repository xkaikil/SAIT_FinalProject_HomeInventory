import React, { useState, useEffect } from "react";
import axios from "axios";
import InventoryForm from "./InventoryForm";
import {useParams} from "react-router-dom";

const EditItem = (props) => {
    const {id} = useParams();
    const [formValues, setFormValues] = useState({
        category: "",
        name: "",
        price: "",
    });

    const onSubmit = (invObject) => {
        axios
            .put(
                "http://localhost:4000/inventory/update-item/" +
                id,
                invObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Item successfully updated");
                    props.history.push("/inventory");
                } else Promise.reject();
            })
            // .catch((err) => alert("Something went wrong"));
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get(
                "http://localhost:4000/inventory/update-item/"
                + id
            )
            .then((res) => {
                const { category, name, price } = res.data;
                setFormValues({ category, name, price });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <InventoryForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update item
        </InventoryForm>
    );
};

export default EditItem;