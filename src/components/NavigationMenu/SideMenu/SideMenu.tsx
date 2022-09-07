import React, {useState} from 'react';
import './SideMenu.scss';
import {NavigationMenuData} from '../NavigationMenu.data';
import {Menu} from './SideMenu.interface';
import {NavLink, useNavigate} from 'react-router-dom';
import Icon from "../../Icon";
import useAuth from '../../../hooks/useAuth';


const SideMenu: React.FC<{}> = () => {

    return (
        <div className='side-menu'>
            <div className="app-content">
                Worklog
            </div>
            <div className="menu-list">
                {NavigationMenuData.map(({id, url, label, icon}: Menu, index)=> {
                    return (
                        <NavLink key={id} to={url}
                                 {...{['data-' + index]: true}}
                                 className={({isActive}) => isActive ? 'active': ''}
                        >
                            <Icon name={icon} /> {label}
                        </NavLink>
                    )
                })}
                <div className='active-background'></div>
            </div>
        </div>
    )
}
export default SideMenu;