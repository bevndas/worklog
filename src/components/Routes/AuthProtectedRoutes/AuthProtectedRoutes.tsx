import {getData} from '../../../utils/storage';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';

const AuthProtectedRoutes = () => {
    const token = getData('token') || '';
    return (
        !token ? <Outlet/> : <Navigate to='/' />
    )
}
export default AuthProtectedRoutes;