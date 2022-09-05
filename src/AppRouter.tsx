import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Leaves from './pages/Leaves';
import Main from './pages/Main';
import Page404 from './components/Page404';
import Settings from './pages/Settings/Settings';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import ForgotPassword from './pages/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword/ResetPassword';
import ProtectedRoutes from './components/Routes/ProtectedRoutes';
import AuthProtectedRoutes from './components/Routes/AuthProtectedRoutes';
import Loader from './components/Loader';

const AppRouter = () => {
    return  (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path={'/'} element={<Main />}>
                        <Route path={'dashboard'}  element={<Dashboard />}></Route>
                        <Route path={'leaves'} element={<Leaves />}></Route>
                        <Route path={'settings'} element={<Settings />}></Route>
                        <Route path={''}  element={<Navigate to={'/dashboard'} replace />}></Route>
                    </Route>
                </Route>
                <Route element={<AuthProtectedRoutes />}>
                    <Route path={'/auth'} element={<Authentication />}>
                        <Route index  element={<Login />}></Route>
                        <Route path={'login'}  element={<Login />}></Route>
                        <Route path={'register'} element={<Register />}></Route>
                        <Route path={'forgot-password'} element={<ForgotPassword />}></Route>
                        <Route path={'reset-password'} element={<ResetPassword />}></Route>
                    </Route>
                </Route>
                <Route path={'*'} element={<Page404/>}></Route>
            </Routes>
        </Suspense>

    )
}
export default AppRouter;