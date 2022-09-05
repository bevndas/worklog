import React from 'react';
import './SideMenu.scss';
import {sideMenuData} from './SideMenu.data';
import {Menu} from './SideMenu.interface';
import {NavLink, useNavigate} from 'react-router-dom';
import Icon from "../Icon";
import useAuth from '../../hooks/useAuth';


const SideMenu: React.FC<{}> = () => {
    const navigate= useNavigate();
    const {handleLogout} = useAuth();

    const handleSignOut = () => {
        handleLogout();
        navigate('/auth/login');
    }

    return (
        <div className='side-menu'>
            <div className="app-content">
                Worklog
            </div>
            <div className="menu-list">
                {sideMenuData.map(({id, url, label, icon}: Menu)=> {
                    return (
                        <NavLink key={id} to={url} className={({isActive}) => isActive ? 'active': ''}>
                            <Icon name={icon} /> {label}
                        </NavLink>
                    )
                })}
                <a onClick={handleSignOut}>
                    <Icon name='logout' /> Sign Out</a>
            </div>
        </div>
    )
}
export default SideMenu;