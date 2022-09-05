import yup  from 'utils/yup';

export const initialRegisterData = {
    firstname: '',
    lastname: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
};

export const registerValidationSchema = yup.object({
    fistName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    userType: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required()
});