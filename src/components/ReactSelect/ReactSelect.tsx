import React from 'react';
import Select from 'react-select';
import {useField} from 'formik';
import './ReactSelect.scss';


const ReactSelect= (props: any) => {
    const [field, state, { setValue, setTouched }] = useField(props.field.name);

    const onChange= (value: any) => {
        setValue(value);
    }

    return (
        <Select {...props}
                classNamePrefix='worklog-select'
                value={state?.value}
                onChange={onChange}
                onBlur={setTouched}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    outline: 'none',
                    colors: {
                        ...theme.colors,
                        primary: 'rgba(244, 114, 34, 1)',
                        primary50: 'rgba(244, 114, 34, 0.5)',
                        primary25: 'rgba(244, 114, 34, 0.25)',
                        primary75: 'rgba(244, 114, 34, 0.75)',
                        danger: 'rgba(234, 76, 70, 1)',
                        dangerLight: 'rgba(234, 76, 70, 0.5)'
                    },
                })}
        />
    )
}
export default ReactSelect;