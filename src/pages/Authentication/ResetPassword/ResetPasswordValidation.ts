import yup  from 'utils/yup';

export const initialResetPasswordData = {
    password: '',
    confirmPassword: ''
};

export const resetPasswordValidationSchema = yup.object({
    password: yup.string().required(),
    confirmPassword: yup.string().required()
});