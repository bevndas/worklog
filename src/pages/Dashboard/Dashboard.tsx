import React from 'react';
import './Dashboard.scss';
import LeaveCard from './LeaveCard';
import {DASHBOARD_DATA} from './Dashboard.data';
const Dashboard: React.FC<{}> = () => {
    return (
        <div className='page dashboard'>
            <div className="leave-ctn">
                {
                    DASHBOARD_DATA && DASHBOARD_DATA.map((leave, index) => {
                        return (
                            <LeaveCard
                                key={index}
                                leaveType={leave.leaveType}
                                icon={leave.icon}
                                availableDays={leave?.availableDays}
                                takenDays={leave?.takenDays}
                                scheduledDays={leave?.scheduledDays}
                                statistic={leave?.statistic}
                            />)
                    })
                }
            </div>
            <hr/>
            <div className="pending-approval">
                <div className="title">Pending Approval</div>
                React table
            </div>

        </div>
    )
}
export default Dashboard;