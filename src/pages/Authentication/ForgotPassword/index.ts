import lazyWithRetry from 'utils/lazyWithRetry';

const ForgotPassword= lazyWithRetry(() => import(/* ForgotPassword */'./ForgotPassword'))
export default ForgotPassword;