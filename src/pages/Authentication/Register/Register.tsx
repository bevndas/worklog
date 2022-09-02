import React from  'react';
import {useNavigate} from 'react-router-dom';
import {Form, Formik} from 'formik';

import {TeamImage} from 'assets/images';
import {FormikInput, FormikSelect} from 'components/Formik';
import Button from 'components/Button';
import {routepaths} from 'global/routepaths';

import {initialRegisterData, registerValidationSchema} from './RegisterValidation';
import './Register.scss';
import {ISelectProps} from 'global/type';


const Register: React.FC<{}> = () => {
    const navigate = useNavigate();
    const  userType: ISelectProps[] = [{label: 'Admin', value: 'admin'}, {label: 'Employee', value: 'employee'}];

    const handleSubmit = () => {

    }

    return (
        <div className='register-page full-page'>
            <div className="register-brand-illustration">
                <img src={TeamImage} alt="Register Brand Illustration"/>
            </div>
            <div className="register-form-ctn">
                <div className="brand-information">
                    Worklog!
                </div>
                <div className="register-form">
                    <Formik initialValues={initialRegisterData}
                            validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
                        {
                            ({values}) => (
                                <Form>
                                    <div className="col-2">
                                        <FormikInput label='First Name' name='firstName' autofill='none' type='text' />
                                        <FormikInput label='Last Name' name='lastName' type='text' />
                                    </div>
                                    <FormikInput label='Email' name='email' type='email' />
                                    <FormikSelect label='Type' name='type' options={userType} />
                                    <div className="col-2">
                                        <FormikInput label='New Password' name='password' type='password' />
                                        <FormikInput label='Confirm Password' name='confirmPassword' type='password' />
                                    </div>
                                    <div className="btn-ctn">
                                        <Button>Register</Button>
                                    </div>
                                    <p className='sign-in'>Already have an account? <span onClick={() => navigate(routepaths.auth.login)}>Sign In!</span></p>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default Register;