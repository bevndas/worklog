import React from  'react';
import './Notifications.scss';
import Icon from '../../Icon';
import DropDown from '../../DropDown';

const Notifications = () => {
    return (
        <>
        <DropDown menuContent={<Icon name='notifications'/>}
                  dropDownContent={
                      <p>Menu content</p>
                  }
        />
            </>
    )
}
export default Notifications;