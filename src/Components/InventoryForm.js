import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { useTranslation} from 'react-i18next';

const InventoryForm = (props) => {
  const {t} = useTranslation();
  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    price: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Required"),
  });

  console.log(props);
  return (
    <div className="inventory-form">
      <Formik
        {...props}
        validationSchema={validationSchema}
        initialValues={{ category: "", name: "", price: "" }}
      >
        <Form>
          <FormGroup className="categoryBlock">
          {t('inventory.category')}:
            <Field name="category" type="text" className="form-control" />
            <ErrorMessage
              name="category"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="nameBlock">
          {t('inventory.name')}:
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="priceBlock">
          {t('inventory.price')}:
            <Field name="price" type="text" className="form-control" />
            <ErrorMessage
              name="price"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <div className="button">
            <Button variant="danger" size="lg" block="block" type="submit">
              {props.children}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default InventoryForm;
