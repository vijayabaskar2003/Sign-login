import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { validationErr } from "../schema/Errors";

const onSubmit = async (values, action) => {
  // console.log(action);
  // console.log(values);
  alert(JSON.stringify(values, null, 2));
  await new Promise((resolve) => setTimeout(resolve, 2000));
  action.resetForm();
};
export default function Reg() {
  // formik declace pannama deract use formik la irunthu call pannikalam
  const { values, handleBlur, handleChange, errors, handleSubmit,isSubmitting ,touched} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
    },

    validationSchema: validationErr,
    onSubmit,
    // console.log('Register form values',values);
    //submit the form to your server here
  });
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          {errors.password && touched.password ? <p>{errors.password}</p> : null}
        </div>

        <div>
          <label>ConfirmPassword:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          {errors.confirmPassword && touched.confirmPassword? <p>{errors.confirmPassword}</p> : null}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
          {errors.age && touched.age ? <p>{errors.age}</p> : null}
        </div>
        <div>
          <button disabled={isSubmitting}>Submit</button>
          <p>
            you already have an account? Please <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
