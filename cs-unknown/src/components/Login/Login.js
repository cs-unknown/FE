import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ props, errors, touched, values, status, history }) => {
  console.log('props', props)
  const [user, setUser] = useState("");

  console.log('status in Login', status)
  console.log('user in Login', user)

  useEffect(() => {
    if (status) {
      setUser(status);
      console.log('useeffectttttt', history)
      history.push('/home')
    }
  }, [status]);

  return (
    <div className="login">
      <h1>Log into your account</h1>
      <Form>
        <Field 
          type="text" 
          name="username" 
          placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        {/* <Link to="/home"> */}
          <button type="submit">Submit</button>
        {/* </Link> */}
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: () => Yup.object().shape({
    username: Yup.string().required("What is your name?"),
    password: Yup.string()
      .required("Please provide your password"),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('hiiiiiiiiii from login')
    return axios
      .post(`https://unknown-mud.herokuapp.com/api/login/`, values)
      .then(res => {
        console.log('results in login', res)
        setStatus(res.data);
        resetForm();
      })
      .catch(err =>
        console.log("Error in handleSubmit axios call", err.response)
      );
  }
})(Login);

export default FormikLogin;