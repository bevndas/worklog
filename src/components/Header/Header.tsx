import React from  'react';
import './Header.scss';
import SearchBar from './SearchBar';
import Profile from './Profile';
import Notifications from './Notifications';

const Header: React.FC<{}> = () => {
    return  (
        <div className='header'>
            <div className="search-bar">
                <SearchBar />
            </div>
            <div className="profile">
                <Profile />
            </div>
            <div className="notifications">
                <Notifications />
            </div>
        </div>
    )
}
export default Header;