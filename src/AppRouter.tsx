import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Leaves from './pages/Leaves';
import Main from './pages/Main';
import Page404 from './components/Page404';
import MainRouter from './pages/Main/MainRouter';
import Settings from './pages/Settings/Settings';

const AppRouter = () => {
    return  (
        <Suspense fallback={<div>Loading....</div>}>
            <Routes>
                <Route path={'/'} element={<Main />}>
                    <Route index  element={<Dashboard />}></Route>
                    <Route path={'dashboard'}  element={<Dashboard />}></Route>
                    <Route path={'leaves'} element={<Leaves />}></Route>
                    <Route path={'settings'} element={<Settings />}></Route>
                </Route>
                <Route path={'/auth'} element={<Authentication />}></Route>
                <Route path={'*'} element={<Page404/>}></Route>
            </Routes>
        </Suspense>

    )
}
export default AppRouter;