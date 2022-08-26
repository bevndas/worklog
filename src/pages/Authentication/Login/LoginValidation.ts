import yup  from 'utils/yup';

export const initialLoginData = {
    username: '',
    password: ''
};

export const loginValidationSchema = yup.object({
   username: yup.string().required(),
   password: yup.string().required()
});