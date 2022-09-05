import lazyWithRetry from 'utils/lazyWithRetry';

const Settings= lazyWithRetry(() => import(/* Settings */'./Settings'))
export default Settings;