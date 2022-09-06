import {Leave} from './Dashboard.interface';

export const DASHBOARD_DATA: Leave[] =  [
    {
        leaveType: 'Vacation',
        icon: 'vacation',
        availableDays: 9,
        scheduledDays:  2,
        statistic: 50
    },
    {
        leaveType: 'Sick',
        icon: 'sick',
        availableDays: 2,
        scheduledDays:  1,
        statistic: 20
    },
    {
        leaveType: 'Unpaid',
        icon: 'money',
        takenDays: 4,
    }
];