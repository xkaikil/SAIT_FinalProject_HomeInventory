import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const InventoryRow = (props) => {
    const { _id, category, name, price, ownerName } = props.obj;
    const { t } = useTranslation();

    const deleteItem = () => {
        axios
            .delete(
                "http://localhost:4000/inventory/delete-item/" + _id
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Item successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            }).catch((err) => alert("Something went wrong"));
    };

    return (
        <tr>
            <td>{category}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <Link className="edit-link"
                    to={"/inventory/edit-item/" + _id}>
                    {t('inventory.edit')}
                </Link>
                <Button onClick={deleteItem}
                    size="sm" variant="danger">
                    {t('inventory.delete')}
                </Button>
            </td>
        </tr>
    );
};

export default InventoryRow;