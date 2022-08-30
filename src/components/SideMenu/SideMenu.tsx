import React from 'react';
import './SideMenu.scss';
import {sideMenuData} from './SideMenu.data';
import {Menu} from './SideMenu.interface';
import {NavLink} from 'react-router-dom';
import Icon from "../Icon";


const SideMenu: React.FC<{}> = () => {
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
            </div>
        </div>
    )
}
export default SideMenu;