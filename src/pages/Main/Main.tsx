import MainRouter from './MainRouter';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import {Outlet} from 'react-router-dom';
import './Main.scss';

const  Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <div className="content">
                <SideMenu></SideMenu>
                <div id='main-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Main;