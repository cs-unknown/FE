import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';

const Registration = ({ errors, touched, values, status }) => {

  const [user, setUser] = useState('');

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
          <p className='error'>{errors.name}</p>
        )}
        <Field 
          type='password'
          name='password'
          placeholder='Password'
        />
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        <Field 
          type='password'
          name='passwordConfirmation'
          placeholder='Password Confirmation'
        />
        {touched.passwordConfirmation && errors.passwordConfirmation && (
          <p className='error'>{errors.passwordConfirmation}</p>
        )}
        <Link to='/login'>
          <button type='submit'>Submit</button>
        </Link>
      </Form>
    </div>
  )
}

const FormikRegistration = withFormik({
  mapPropsToValues({ name, password, passwordConfirmation }) {
    return {
      name: name || '',
      password: password || '',
      passwordConfirmation: passwordConfirmation || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('You need a name to play with others.'),
    password: Yup.string().required('Please provide a password').min(4, 'Needs to be longer...').max(10, 'Do not make it super complicated.'),
    passwordConfirmation: Yup.string().required().test('passwords match', 'Passwords must match!', function(value) {
      return this.parent.password === value;
    })
  }),

  handleSubmit(values, {setStatus}) {
    axios
      .post(`https://unknown-mud.herokuapp.com/api/registration/`, values)
      .then(res => {
        setStatus(res.data)
      })
      .catch(err => console.log("Error in handleSubmit axios call", err.response)
      );
  }
})(Registration);

export default FormikRegistration;