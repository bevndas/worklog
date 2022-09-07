import React, {useState} from 'react';
import './Footer.scss';
import {NavigationMenuData} from '../NavigationMenu.data';
import {Menu} from '../SideMenu/SideMenu.interface';
import Icon from '../../Icon';
import {NavLink} from 'react-router-dom';
import {routepaths} from 'global/routepaths';

const Footer: React.FC<{}> = () => {
    const tabName=['first', 'second', 'third', 'fourth'];
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className='footer'>
            {
                NavigationMenuData.map(({id, url, label, icon}: Menu, index) => {
                    return (
                        <NavLink key={id} data-option={index + 1} to={url}
                                 className={({isActive}) => isActive ? 'active': ''}
                                 onClick={() => setActiveTab(index)}
                        >
                            <Icon name={icon} /> <span>{label}</span>
                        </NavLink>
                    )
                })
            }
            <NavLink key={3} to={routepaths.profile}
                     className={({isActive}) => isActive ? 'active': ''}
                     onClick={() => setActiveTab(3)}
            >
                <Icon name='person' /> <span>Profile</span>
            </NavLink>
            <hr className={`${tabName[activeTab]}`}/>
        </div>
    )
}
export default Footer;