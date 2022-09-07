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
                NavigationMenuData.map(({id, url, label, icon}: Menu, index) => {
                    return (
                        <NavLink key={id} data-option={index + 1} to={url}
                                 className={({isActive}) => isActive ? 'active': ''}
                                 {...{['data-' + index]: true}}
                        >
                            <Icon name={icon} /> <span>{label}</span>
                        </NavLink>
                    )
                })
            }
            <NavLink key={3} to={routepaths.profile}
                     {...{['data-' + 3]: true}}
                     className={({isActive}) => isActive ? 'active': ''}
            >
                <Icon name='person' /> <span>Profile</span>
            </NavLink>
            <hr/>
        </div>
    )
}
export default Footer;