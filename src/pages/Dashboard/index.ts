import lazyWithRetry from 'utils/lazyWithRetry';

const Dashboard= lazyWithRetry(() => import(/* Dashboard */'./Dashboard'))
export default Dashboard;