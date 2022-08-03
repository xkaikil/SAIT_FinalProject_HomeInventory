import React from "react";
import "./StyleSignUpForm.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const SignUpForm = (props) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("You have to enter an invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  console.log(props);
  return (
    <div className="regisForm">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup className="firstName">
            First Name:
            <Field name="first" type="text" className="field-control" />
            <ErrorMessage name="first" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup className="lastName">
            Last Name:
            <Field name="last" type="text" className="field-control" />
            <ErrorMessage name="last" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup className="firstName">
            Email:
            <Field name="email" type="email" className="field-control" />
            <ErrorMessage name="first" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup className="firstName">
            password:
            <Field name="password" type="password" className="field-control" />
            <ErrorMessage name="password" className="d-block invalid-feedback" component="span" />
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
export default SignUpForm;
