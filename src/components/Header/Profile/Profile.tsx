import React from 'react';
import './Profile.scss';
import Icon from '../../Icon';
import DropDown from '../../DropDown';

const Profile = () => {
    return (
        <div className='profile-ctn'>
            <div className="image">
                <Icon name='person'></Icon>
            </div>
            <div className="name">Bipin</div>
            <DropDown menuContent={<Icon name='chevronDown' />} dropDownContent={
                <p>Drop down profile</p>
            }/>
        </div>
    )
}
export default Profile;