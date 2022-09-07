import lazyWithRetry from 'utils/lazyWithRetry';

const LeaveRequest= lazyWithRetry(() => import(/* LeaveRequest */'./LeaveRequest'))
export default LeaveRequest;