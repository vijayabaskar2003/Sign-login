import React from 'react';
import { useFormik } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name:Yup.string().max(20, '*Must be 15 characters or less').matches(/^[a-zA-Z ]+$/,"*Name can only contain letters and spaces")
  .required("*Name is required"),
  password:Yup.string()
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,'* Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.')
  .required('*password is required'),
});

export default function Login()  {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema ,
    onSubmit: values => {
      alert(`${JSON.stringify(values,null,2)}`);
    },
  });
 
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">UserName:</label>
        <input id="name" name="name" type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        /><br/>
        {/*formik.touched.email----specifically checks if the email field has been touched. */}
        {/* formik.errors.email----specifically checks if there is a validation error for the email field. */}
        {  formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>) : null
        }
      
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        /><br/>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>  ) : null}
   
          <button type="submit">Submit</button>
          <p>Create new account? Please <Link to="/register">Register</Link></p>
       
    </form>
    </div>
  );
};


  