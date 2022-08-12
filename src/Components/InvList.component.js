import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import InventoryRow from "./InventoryRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InventoryList = () => {
    const { t } = useTranslation();
    const [inv, setInv] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/inventory/")
            .then(({ data }) => {
                setInv(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return inv.map((res, i) => {
            return <InventoryRow obj={res} key={i} />;
        });
    };
    
    

    return (
        <div>
            <div className="table-wrapper">
                <h1>{t('inventory.inventoryList')}</h1>
                <Table striped bordered hover>
                    <thead style={{color: "lightblue"}}>
                        <tr>
                            <th>{t('inventory.category')}</th>
                            <th>{t('inventory.name')}</th>
                            <th>{t('inventory.price')}</th>
                            <th>{t('inventory.owner')}</th>
                            <th>{t('inventory.tools')}</th>
                        </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
                </Table>
            </div>
            <div>
                <Link to={"/inventory/create-item"}
                    className="createItem">
                    {t('inventory.addItem')}
                </Link>
            </div>
        </div>
    )
};

export default InventoryList;