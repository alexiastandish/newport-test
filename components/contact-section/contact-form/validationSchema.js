import * as yup from 'yup';

const formValidationSchema = yup.object().shape({
  fname: yup.string().required('Enter your first name'),
  lname: yup.string().required('Enter your last name'),
  email: yup
    .string()
    .required('Enter a valid email address')
    .email('Email address is not valid'),
  message: yup.string().required('Enter your company')
});

export default formValidationSchema;
