import {Outlet, Route,} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Leaves from '../Leaves';
import Settings from '../Settings/Settings';
import React from 'react';

const MainRouter = () => {
    return   (
        <>
            <Route index  element={<Dashboard />}></Route>
            <Route path={'dashboard'}  element={<Dashboard />}></Route>
            <Route path={'leaves'} element={<Leaves />}></Route>
            <Route path={'settings'} element={<Settings />}></Route>
        </>

    )
}
export default MainRouter;