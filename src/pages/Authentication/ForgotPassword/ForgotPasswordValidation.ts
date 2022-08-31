import yup  from 'utils/yup';

export const initialForgotPasswordData = {
    email: ''
};

export const forgotPasswordValidationSchema = yup.object({
    email: yup.string().required()
});