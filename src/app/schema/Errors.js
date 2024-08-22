import * as Yup from 'yup';

//Validation schema for form inputs
// why object is used because form field is object so we use Yup.object

const nameRules=(/^[a-zA-Z ]+$/);
const emailRules=(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const passwordRules=(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i);

  export  const validationErr=Yup.object().shape({
        name:Yup.string().max(20, '*Must be 15 characters or less').matches(nameRules,"*Name can only contain letters and spaces").required("*Name is required"),
        email:Yup.string().matches(emailRules,'*invalid email address').required('*email is required'),
        password:Yup.string().matches(passwordRules,'* Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.').required('*password is required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], '*Passwords and confirmPassword not matching').required('*ConfirmPassword is required'),
        age: Yup.number().positive().integer().required('*Age is required')
//  Yup has various type methods like .string(), .number(), .boolean(), etc.,
//.oneOf() is a Yup method that specifies an array of valid values for the field.
// Yup.ref('password') This is a reference to another field in the schema, specifically the password field.
    });