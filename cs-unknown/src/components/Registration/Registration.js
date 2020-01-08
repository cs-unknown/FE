import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';
import { login } from '../../actions/roomActions'

const Registration = ({ errors, touched, values, status, history }) => {

  const [user, setUser] = useState('');

  useEffect(() => {
    if (status) {
      setUser(status);
      history.push('/login')
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
        <button type='submit'>Submit</button>
      </Form>
      <Link to='/login'>Already have an account? Log in here</Link>
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

  handleSubmit(values, { setStatus, props }) {
    return axios
      .post(`https://unknown-mud.herokuapp.com/api/registration/`, values)
      .then(res => {
        setStatus(res.data);
        props.useDispatch(login(values.username))
        localStorage.setItem('token', res.data.key)
      })
      .catch(err =>
        console.log("Error in handleSubmit axios call", err.response)
      );
  }
})(Registration);

export default FormikRegistration;