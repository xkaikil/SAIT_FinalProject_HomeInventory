import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";




const ManageCategory = (props) => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),

  });
  

  return (
    <div className="regisForm">
      <Formik {...props} validationSchema={validationSchema} enableReinitialized>
        <Form>
          <FormGroup className="categoryName">
            {t('admin.category')}:
            <Field name="name" type="text" className="field-control" />
            <ErrorMessage
              name="first"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <div className="regisButton">
            <Button variant="danger" size="lg" block="block" type="submit">
              {props.children}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default ManageCategory;
