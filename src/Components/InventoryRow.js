import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CreateItem from "./create-item.component";

const InventoryRow = (props) => {
    const { _id, category, name, price } = props.obj;

    const deleteItem = () => {
        axios
            .delete(
                "http://localhost:4000/inventory/delete-item" + _id
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Item successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            }).catch((err) => alert("Something went wrong"));
    };

    return (
        <div className="invListTable">
            <tr>
                <td>{category}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <Link className="edit-link"
                        to={"/edit-item/" + _id}>
                        {t('inventory.edit')}
                    </Link>
                    <Button onClick={deleteItem}
                        size="sm" variant="danger">
                        {t('inventory.delete')}
                    </Button>
                </td>
            </tr>            
        </div>


    );
};

export default InventoryRow;