import React from 'react';
import Card from 'components/Cards';
import './LeaveCard.scss';
import Icon from 'components/Icon';
import {Leave} from '../Dashboard.interface';



const LeaveCard: React.FC<Leave> = (props) => {
    return (
        <Card>
            <div className="leave-title">
                <Icon name={props.icon}></Icon>
                <h3 className="title">
                    {props.leaveType}
                </h3>
            </div>
            <div className="leave-description">
                <div className="leave-days">{props.availableDays || props.takenDays}</div>
                <div className="leave-types">
                    <p className="leave-status">{props.availableDays && 'Available' ||
                    props.takenDays  && 'Taken'} Days</p>
                    {props.scheduledDays &&  <p className="scheduled-leave">{props.scheduledDays} days scheduled</p>}
                </div>
                {
                    props.statistic && <div className="leave-statistics">
                        {props.statistic}%
                    </div>
                }
            </div>
        </Card>
    );
}
export default LeaveCard;