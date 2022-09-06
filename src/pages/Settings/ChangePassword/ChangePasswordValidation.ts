import yup from 'utils/yup';

export const changePasswordInitialData = {
    oldPassword: '',
    newPassword:'',
    confirmNewPassword: ''
};

export  const  changePasswordValidationSchema = {
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmNewPassword: yup.string().required(),
}