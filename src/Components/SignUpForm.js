import React from "react";
import "./StyleSignUpForm.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import LanguageToggleSignUp from "./LanguageToggleSignUp";

const SignUpForm = (props) => {
  const { t, i18n } = useTranslation();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
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
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      >
        <Form>
        <FormGroup className="languagePreference">
          {t('login.languagePreference')}:
            <br/>
          {t('login.languageChosen')}
            <br/>
            <LanguageToggleSignUp/>
          </FormGroup>
          <br/>
          <FormGroup className="firstName">
          {t('login.firstName')}:
            <Field name="firstName" type="text" className="field-control" />
            <ErrorMessage
              name="first"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="lastName">
          {t('login.lastName')}:
            <Field name="lastName" type="text" className="field-control" />
            <ErrorMessage
              name="last"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="email">
            {/* E-mail label does not require a French Translation */}
            E-mail:
            <Field name="email" type="text" className="field-control" />
            <ErrorMessage
              name="first"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="password">
            {t('login.password')}:
            <Field name="password" type="password" className="field-control" />
            <ErrorMessage
              name="password"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <div className="regisButton">
            <Button variant="danger" size="lg" block="block" type="submit">
              {props.children}
            </Button>
          </div>
          <Link to="/login">{t('login.alreadyHaveAnAccount')} </Link>
        </Form>
      </Formik>
    </div>
  );
};
export default SignUpForm;
