import lazyWithRetry from 'utils/lazyWithRetry';

const ResetPassword= lazyWithRetry(() => import(/* ResetPassword */'./ResetPassword'))
export default ResetPassword;