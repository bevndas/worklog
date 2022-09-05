import lazyWithRetry from 'utils/lazyWithRetry';

const Register= lazyWithRetry(() => import(/* Register */'./Register'))
export default Register;