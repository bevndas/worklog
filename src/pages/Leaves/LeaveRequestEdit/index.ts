import lazyWithRetry from 'utils/lazyWithRetry';

const LeaveRequestEdit= lazyWithRetry(() => import(/* LeaveRequestEdit */'./LeaveRequestEdit'))
export default LeaveRequestEdit;