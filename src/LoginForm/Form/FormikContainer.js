import React from 'react'
import { Formik, Form } from 'formik';
import *as yup from 'yup';
import FormikControl from './FormikControl';
import { FaArrowRight } from 'react-icons/fa';

function FormikContainer() {
    const initialValues = {
        name: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    };
    const onSubmit = (values) => {
        console.log(values)
    };
    const validationSchema = yup.object({
        name: yup.string().required('!Required'),
        email: yup.string().email('Invalid Format').required('!Required'),
        number: yup.string().required('!Required'),
        password: yup.string().required('!Required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Password does not match').required('!Required')
    })
    return (
        <div>
           <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {
                  formik => {
                      return (
                        <Form>
                           <label htmlFor='name'>Name:</label><br />
                           <FormikControl name="name" control="name" type="text" className="input" /><br />

                           <label htmlFor='email'>Email:</label><br />
                           <FormikControl name="email" control="email" type="text" className="input" /><br />

                           <label htmlFor='number'>Phone Number:</label><br />
                           <FormikControl name="number" control="number" type="number" className="input" /><br />

                           <label htmlFor='password'>Password:</label><br />
                           <FormikControl name="password" control="password" type="password" className="input" /><br />

                           <label htmlFor='confirmPassword'>Confirm Password:</label><br />
                           <FormikControl name="confirmPassword" control="confirmPassword" type="password" className="input" /><br />

                           <button disabled={!formik.isValid}>Submit <FaArrowRight className="icon" /></button>
                        </Form>
                      )
                  }
              }
           </Formik>
        </div>
    )
}

export default FormikContainer
