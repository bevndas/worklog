import lazyWithRetry from 'utils/lazyWithRetry';

const Main= lazyWithRetry(() => import(/* Main */'./Main'))
export default Main;