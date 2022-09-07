import React from 'react';
import './Profile.scss';
import Icon from '../../Icon';
import DropDown from '../../DropDown';
import {useNavigate} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const navigate= useNavigate();
    const {handleLogout} = useAuth();

    const handleSignOut = () => {
        handleLogout();
        navigate('/auth/login');
    }
    return (
        <div className='profile-ctn'>
            <div className="image">
                <Icon name='person'></Icon>
            </div>
            <div className="name">Bipin</div>
            <div className='drop-down'>
                <DropDown menuContent={<Icon name='chevronDown' />} dropDownContent={
                    <a onClick={handleSignOut}>
                        <Icon name='logout' /> Sign Out</a>
                }/>
            </div>
        </div>
    )
}
export default Profile;