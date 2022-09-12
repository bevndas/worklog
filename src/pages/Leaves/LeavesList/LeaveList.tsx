import React from 'react';
import './LeaveList.scss';
import FAB from '../../../components/FAB';
import {useNavigate} from 'react-router-dom';
import {routepaths} from '../../../global/routepaths';

const LeaveList = () => {
    const navigate = useNavigate();
    const  onRequestLeave = () => {
        navigate(routepaths.leaves.create);
    }

    return (
        <div  className='page leave'>
            <FAB position={'bottom-right'} action={onRequestLeave} />
        </div>
    )
}
export default LeaveList;