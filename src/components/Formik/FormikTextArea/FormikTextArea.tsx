import {ErrorMessage, Field, useField} from 'formik';
import FormikErrorMessage from '../FormikErrorMessage';

const FormikTextArea = ({label,rows = 4, ...props}: any) => {
    const [field, meta] = useField(props);
    return (
        <div className={`form-control ${meta.error && meta.touched && 'error'}`}>
            <label htmlFor={field.name}>{label}</label>
            <textarea rows={rows} {...field} {...props}/>
            <ErrorMessage name={field.name} component={FormikErrorMessage}/>
        </div>
    )
}
export default FormikTextArea;