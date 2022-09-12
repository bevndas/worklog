import React from 'react';
import {ErrorMessage, Field, useField} from 'formik';
import FormikErrorMessage from '../FormikErrorMessage';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const FormikDatePicker = ({label, ...props}: any) => {
    const [field, meta] = useField(props);
    return (
        <div className={`form-control ${meta.error && meta.touched && 'error'}`}>
            <label htmlFor={field.name}>{label}</label>
            <DatePicker
                selected={props.startDate}
                onChange={props.onChange}
                {...props}
            />
            <ErrorMessage name={field.name} component={FormikErrorMessage}/>
        </div>
    )
}
export default FormikDatePicker;