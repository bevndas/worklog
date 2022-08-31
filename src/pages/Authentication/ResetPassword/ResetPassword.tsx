import React, {useState} from 'react';
import {Form, Formik} from 'formik';

import {SuccessImage, ResetPasswordImage} from 'assets/images';
import FormikInput from 'components/Formik/FormikInput';
import Button from 'components/Button';

import './ResetPassword.scss';
import {initialResetPasswordData, resetPasswordValidationSchema} from './ResetPasswordValidation';
import {routepaths} from '../../../global/routepaths';
import {useNavigate} from 'react-router-dom';

const ResetPassword: React.FC<{}> = () => {
    const [passwordReset, setPasswordReset] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleSubmit = () => {}
    return (
        <div className='reset-password-page full-page'>
            {
                passwordReset ? <>
                        <div className="password-reset-success">
                            <div className="password-reset-image">
                                <img src={SuccessImage} alt="Password Reset"/>
                            </div>
                            <div className="description">
                                <h3>Your password has been reset!</h3>
                                <p>For security reasons, we have sent you an email that contains a link to reset your password.</p>
                            </div>
                            <div className="btn-ctn">
                                <Button expand='block' fill='fill' color='brand'
                                        onClick={() => navigate(routepaths.auth.login)}>Back to Login</Button>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="reset-brand-illustration">
                            <img src={ResetPasswordImage} alt="Reset Brand Illustration"/>
                        </div>
                        <div className="reset-form-ctn">
                            <div className="form-title-information">
                                Reset Your Password?
                            </div>
                            <div className="reset-form">
                                <Formik initialValues={initialResetPasswordData}
                                        validationSchema={resetPasswordValidationSchema} onSubmit={handleSubmit}>
                                    {
                                        ({values}) => (
                                            <Form>
                                                <FormikInput label='New Password' name='password' type='password' />
                                                <FormikInput label='Confirm Password' name='confirmPassword' type='password'  />
                                                <div className="btn-ctn">
                                                    <Button>Reset Password</Button>
                                                </div>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
export default ResetPassword;