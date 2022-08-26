import React from  'react';
import {Form, Formik} from 'formik';
import {initialLoginData, loginValidationSchema} from './LoginValidation';
import FormikInput from '../../../components/Formik/FormikInput';
const Login: React.FC<{}> = () => {

    const handleSubmit = async (values: typeof initialLoginData)  => {

    }

    return (
        <Formik initialValues={initialLoginData}
                validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
            {
                ({values}) => (
                    <Form>
                        <FormikInput label='Username' name='username' autofill='none' type='email' />
                        <FormikInput label='Password' name='password' type='password' />
                        <button type='submit'>Login</button>
                    </Form>
                )
            }

        </Formik>
    )
}
export default Login;