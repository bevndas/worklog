import React from  'react';
import './Header.scss';
import SearchBar from './SearchBar';
import Profile from './Profile';
import Notifications from './Notifications';

interface IHeader {
    smallScreen: boolean
}

const Header: React.FC<IHeader> = ({smallScreen}) => {
    return  (
        <div className='header'>
            {
                !smallScreen && <>
                    <div className="search-bar">
                        <SearchBar />
                    </div>
                    <div className="profile">
                        <Profile />
                    </div>
                </>
            }
            <div className="notifications">
                <Notifications />
            </div>
        </div>
    )
}
export default Header;