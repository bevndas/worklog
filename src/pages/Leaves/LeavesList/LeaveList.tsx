import React from 'react';
import './LeaveList.scss';
import FAB from '../../../components/FAB';

const LeaveList = () => {

    const  onRequestLeave = () => {

    }

    return (
        <div>
            <FAB position={'bottom-right'} action={onRequestLeave} />
        </div>
    )
}
export default LeaveList;