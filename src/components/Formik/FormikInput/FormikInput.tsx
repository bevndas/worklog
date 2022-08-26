import {Field, ErrorMessage, useField} from 'formik';
import FormikErrorMessage from '../FormikErrorMessage';

const FormikInput = ({name,label, ...props}: any) => {
    console.log('props', props)
    const [field, meta] = useField(props);
    return (
        <div className={`form-control ${meta.error && 'error'}`}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...props} />
            <ErrorMessage name={name} component={FormikErrorMessage}/>

        </div>
    )
}
export default FormikInput;