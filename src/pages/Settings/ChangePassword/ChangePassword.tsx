import React from  'react';
import './ChangePassword.scss';
import {Form, Formik} from 'formik';
import {changePasswordInitialData, changePasswordValidationSchema} from './ChangePasswordValidation';
import {FormikInput} from '../../../components/Formik';
import Button from '../../../components/Button';

const ChangePassword = () => {
    const handleSubmit = () => {
        console.log('password changed');
    }
    return (
        <div className='change-password-form'>
            <Formik initialValues={changePasswordInitialData}
                    validationSchema={changePasswordValidationSchema}
                    onSubmit={handleSubmit}>
                {
                    () => (
                        <Form>
                            <FormikInput type='password' label='Old Password' name='oldPassword' />
                            <FormikInput type='password' label='New Password' name='newPassword' />
                            <FormikInput type='password' label='Confirm New Password' name='confirmNewPassword' />
                            <div className="btn-ctn">
                                <Button expand='inline'>Change Password</Button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
export default ChangePassword;