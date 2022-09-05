import {Navigate, Outlet, Route} from 'react-router-dom';
import {getData} from '../../../utils/storage';

const ProtectedRoutes = () => {
    const token = getData('token') || '';
    return (
        token ? <Outlet /> : <Navigate to='/auth/login' />
    )
}
export  default ProtectedRoutes;