import MainRouter from './MainRouter';
import SideMenu from '../../components/NavigationMenu/SideMenu';
import Header from '../../components/Header';
import {Outlet} from 'react-router-dom';
import './Main.scss';
import React, {Suspense, useEffect} from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Footer from "../../components/NavigationMenu/Footer";

const  Main = () => {
    const [isLessThanBreakPoint] = useMediaQuery(768);

    return (
        <div className='main'>
            <Header  smallScreen={isLessThanBreakPoint}></Header>
            <div className="content">
                {!isLessThanBreakPoint && <SideMenu />}
                <div className={isLessThanBreakPoint ? 'main-content main-content-with-footer' : 'main-content'}>
                    <Suspense fallback={<div>Loading....</div>}>
                    <Outlet />
                    </Suspense>
                </div>
            </div>
            {isLessThanBreakPoint && <Footer />}
        </div>
    )
}
export default Main;