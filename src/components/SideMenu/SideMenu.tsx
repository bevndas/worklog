import React from 'react';
import './SideMenu.scss';
import {sideMenuData} from './SideMenu.data';
import {Menu} from './SideMenu.interface';
import {Link, NavLink} from 'react-router-dom';


const SideMenu: React.FC<{}> = () => {
    return (
        <div className='side-menu'>
            <div className="app-content">
                Worklog
            </div>
            <ul>
                {sideMenuData.map((menu: Menu)=> {
                    return (
                        <li  key={menu.id}>
                            <NavLink  to={menu.url}>
                                {menu.label}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default SideMenu;