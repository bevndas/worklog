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
import Profile from './pages/Profile/Profile';
import {routepaths} from './global/routepaths';
import LeaveList from './pages/Leaves/LeavesList/LeaveList';
import LeaveRequest from './pages/Leaves/LeaveRequest/LeaveRequest';
import LeaveRequestEdit from './pages/Leaves/LeaveRequestEdit/LeaveRequestEdit';

const AppRouter = () => {
    return  (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route element={<ProtectedRoutes />}>
                    <Route path={'/'} element={<Main />}>
                        <Route path={routepaths.dashboard}  element={<Dashboard />}></Route>
                        <Route path={routepaths.leaves.base} element={<Leaves />}>
                            <Route path={routepaths.leaves.list} element={<LeaveList />}></Route>
                            <Route path={routepaths.leaves.create} element={<LeaveRequest />}></Route>
                            <Route path={routepaths.leaves.edit} element={<LeaveRequestEdit />}></Route>
                            <Route path={''}  element={<Navigate to={routepaths.leaves.list} replace />}></Route>
                        </Route>
                        <Route path={routepaths.settings} element={<Settings />}></Route>
                        <Route path={routepaths.profile} element={<Profile />}></Route>
                        <Route path={''}  element={<Navigate to={routepaths.dashboard} replace />}></Route>
                    </Route>
                </Route>
                <Route element={<AuthProtectedRoutes />}>
                    <Route path={'/auth'} element={<Authentication />}>
                        <Route index  element={<Login />}></Route>
                        <Route path={routepaths.auth.login}  element={<Login />}></Route>
                        <Route path={routepaths.auth.signUp} element={<Register />}></Route>
                        <Route path={routepaths.auth.forgotPassword} element={<ForgotPassword />}></Route>
                        <Route path={routepaths.auth.resetPassword} element={<ResetPassword />}></Route>
                    </Route>
                </Route>
                <Route path={'*'} element={<Page404/>}></Route>
            </Routes>
        </Suspense>
    )
}
export default AppRouter;