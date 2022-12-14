import {ErrorMessage, Field, useField} from 'formik';
import FormikErrorMessage from '../FormikErrorMessage';

const FormikInput = ({label, ...props}: any) => {
    const [field, meta] = useField(props);
    return (
        <div className={`form-control ${meta.error && meta.touched && 'error'}`}>
            <label htmlFor={field.name}>{label}</label>
            <Field {...field} {...props}/>
            <ErrorMessage name={field.name} component={FormikErrorMessage}/>
        </div>
    )
}
export default FormikInput;