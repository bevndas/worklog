import React from  'react';
import {Form, Formik} from 'formik';
import {initialLoginData, loginValidationSchema} from './LoginValidation';
import FormikInput from 'components/Formik/FormikInput';
import './Login.scss';
import {useNavigate} from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import {LoginImage} from 'assets/images';
const Login: React.FC<{}> = () => {
    const navigate = useNavigate();
    const {handleLogin} = useAuth();

    const handleSubmit = async (values: typeof initialLoginData)  => {
        handleLogin('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o');
        navigate('/');
    }

    return (
        <div className='login-page full-page'>
            <div className="login-brand-illustration">
                <img src={LoginImage} alt="Login Brand Illustration"/>
            </div>
            <div className="login-form-ctn">
                <div className="brand-information">
                    Worklog!
                </div>
                <div className="login-form">
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
                </div>
            </div>
            
        </div>
        
    )
}
export default Login;