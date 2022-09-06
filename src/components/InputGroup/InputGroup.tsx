import React from 'react';
import  './InputGroup.scss';

interface IInputGroup {
    icon: React.ReactNode;
    control: React.ReactNode;
}

const InputGroup: React.FC<IInputGroup> = (props) => {
    return (
        <div className='input-group'>
            {props.icon}
            {props.control}
        </div>
    )
}
export default InputGroup;