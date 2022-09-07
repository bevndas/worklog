import React from 'react';
import './Footer.scss';
import {NavigationMenuData} from '../NavigationMenu.data';
import {Menu} from '../SideMenu/SideMenu.interface';
import Icon from '../../Icon';
import {NavLink} from 'react-router-dom';
import {routepaths} from 'global/routepaths';

const Footer: React.FC<{}> = () => {
    return (
        <div className='footer'>
            {
                NavigationMenuData.map(({id, url, label, icon}: Menu) => {
                    return (
                        <NavLink key={id} to={url} className={({isActive}) => isActive ? 'active': ''}>
                            <Icon name={icon} /> <span>{label}</span>
                        </NavLink>
                    )
                })
            }
            <NavLink key={3} to={routepaths.profile} className={({isActive}) => isActive ? 'active': ''}>
                <Icon name='person' /> <span>Profile</span>
            </NavLink>
        </div>
    )
}
export default Footer;