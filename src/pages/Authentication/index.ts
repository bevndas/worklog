import lazyWithRetry from 'utils/lazyWithRetry';

const Authentication= lazyWithRetry(() => import(/* Authentication */'./Authentication'))
export default Authentication;