import lazyWithRetry from 'utils/lazyWithRetry';

const Profile= lazyWithRetry(() => import(/* Profile */'./Profile'))
export default Profile;