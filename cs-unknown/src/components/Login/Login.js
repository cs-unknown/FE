import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (status) {
      setUser(status);
    }
  }, [status]);

  return (
    <div className="login">
      <h1>Log into your account</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.name}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Link to="/home">
          <button type="submit">Submit</button>
        </Link>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("What is your name?"),
    password: Yup.string()
      .required("Please provide your password"),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post(`https://unknown-mud.herokuapp.com/api/login/`, values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err =>
        console.log("Error in handleSubmit axios call", err.response)
      );
  }
})(Login);

export default FormikLogin;