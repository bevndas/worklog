import lazyWithRetry from 'utils/lazyWithRetry';

const Login= lazyWithRetry(() => import(/* Login */'./Login'))
export default Login;