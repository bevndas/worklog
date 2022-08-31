import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Formik} from 'formik';


import {ForgotPasswordImage, MailSentImage} from 'assets/images';
import FormikInput from 'components/Formik/FormikInput';
import Button from 'components/Button';
import {routepaths} from 'global/routepaths';

import './ForgotPassword.scss';
import {forgotPasswordValidationSchema, initialForgotPasswordData} from './ForgotPasswordValidation';

const ForgotPassword: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [mailSent, setMailSent]  = useState<boolean>(true);

    const handleSubmit = () => {
            setMailSent(true);
    }

    return (
        <div  className='forgot-password-page full-page'>
            {
                mailSent ? <>
                    <div className="mail-sent-success">
                        <div className="mail-sent-image">
                            <img src={MailSentImage} alt="Mail Sent"/>
                        </div>
                        <div className="description">
                            <h3>A reset link is on the way!</h3>
                            <p>For security reasons, we have sent you an email that contains a link to reset your password.</p>
                        </div>
                        <div className="btn-ctn">
                            <Button expand='block' fill='fill' color='brand'
                                onClick={() => navigate(routepaths.auth.login)}>Back to Login</Button>
                        </div>
                    </div>
                </>: <>
                    <div className="fp-brand-illustration">
                        <img src={ForgotPasswordImage} alt="FP Brand Illustration"/>
                    </div>
                    <div className="fp-form-ctn">
                        <div className="form-title-information">
                            Forgot Your Password?
                        </div>
                        <div className="fp-form">
                            <Formik initialValues={initialForgotPasswordData}
                                    validationSchema={forgotPasswordValidationSchema} onSubmit={handleSubmit}>
                                {
                                    ({values}) => (
                                        <Form>
                                            <FormikInput label='Enter Email Address' name='email' autofill='none' type='email' />
                                            <div className="btn-ctn">
                                                <Button>Reset Password</Button>
                                            </div>
                                            <p className='sign-in'>Go back to <span onClick={() => navigate(routepaths.auth.login)}>Login</span></p>
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
export default ForgotPassword;