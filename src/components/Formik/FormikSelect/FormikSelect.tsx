import {ErrorMessage, Field, useField} from 'formik';
import FormikErrorMessage from '../FormikErrorMessage';
import ReactSelect from '../../ReactSelect';


const FormikSelect = ({label,options, ...props}: any) => {
    const [field, meta ] = useField(props);
    const {value, onBlur, name,...otherField} = field;
    return (
        <div className={`form-control ${meta.error && meta.touched && 'error'}`}>
            <label htmlFor={field.name}>{label}</label>
            <Field name={field.name} component={ReactSelect} options={options} />
            <ErrorMessage name={field.name} component={FormikErrorMessage}/>
        </div>
    )
}
export default FormikSelect;