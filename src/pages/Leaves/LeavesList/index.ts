import lazyWithRetry from 'utils/lazyWithRetry';

const LeaveList= lazyWithRetry(() => import(/* LeaveRequestEdit */'./LeaveList'))
export default LeaveList;