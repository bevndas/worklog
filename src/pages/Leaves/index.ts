import lazyWithRetry from 'utils/lazyWithRetry';

const Leaves= lazyWithRetry(() => import(/* Leaves */'./Leaves'))
export default Leaves;