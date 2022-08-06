import React from "react";
import "./StyleSignUpForm.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
const LogInPageMaster = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("You have to enter an invalid email address")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  console.log(props);
  return (
    <div className="regisForm">
      <Formik
        {...props}
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
      >
        <Form>
          <FormGroup className="email">
            Email:
            <Field name="email" type="email" className="field-control" />
            <ErrorMessage
              name="first"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="password">
            password:
            <Field name="password" type="password" className="field-control" />
            <ErrorMessage
              name="password"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <div className="login-button">
            <Button variant="danger" size="lg" block="block" type="submit">
              {props.children}
            </Button>
          </div>
          <Link to="/signup">New User?</Link>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInPageMaster;
