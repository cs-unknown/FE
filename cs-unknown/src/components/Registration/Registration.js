import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';

const Registration = ({ errors, touched, values, status }) => {

  const [user, setUser] = useState('');

  // console.log('user in registration', user)
  // console.log('status in registration', status)

  useEffect(() => {
    if (status) {
      setUser(status);
    }
  }, [status])

  return (
    <div className='registration'>
      <h1>Register for a New Account</h1>
      <Form>
        <Field
          type='text'
          name='username'
          placeholder='Username'
        />
        {touched.username && errors.username && (
          <p className='error'>{errors.username}</p>
        )}
        <Field
          type='password'
          name='password1'
          placeholder='Password'
        />
        {touched.password1 && errors.password1 && (
          <p className='error'>{errors.password1}</p>
        )}
        <Field
          type='password'
          name='password2'
          placeholder='Password Confirmation'
        />
        {touched.password2 && errors.password2 && (
          <p className='error'>{errors.password2}</p>
        )}
        <Link to='/login'>
          <button type='submit'>Submit</button>
        </Link>
      </Form>
      <Link to='regist'></Link>
    </div>
  )
}

const FormikRegistration = withFormik({
  mapPropsToValues: ({ username, password1, password2 }) => {
    return {
      username: username || "",
      password1: password1 || "",
      password2: password2 || ""
    };
  },

  validationSchema: () => Yup.object().shape({
    username: Yup.string().required("You need a name to play with others."),
    password1: Yup.string()
      .required("Please provide a password")
      .min(8, "Needs to be longer...")
      .max(12, "Do not make it super complicated."),
    password2: Yup.string()
      .required()
  }),

  handleSubmit(values, { setStatus }) {
    return axios
      .post(`https://unknown-mud.herokuapp.com/api/registration/`, values)
      .then(res => {
        console.log("axios response", res);
        setStatus(res.data);
        localStorage.setItem('token', res.data.key)
      })
      .catch(err =>
        console.log("Error in handleSubmit axios call", err.response)
      );
  }
})(Registration);

export default FormikRegistration;