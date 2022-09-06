import React, {useEffect, useRef, useState} from 'react';
import './DropDown.scss';

interface IDropDown {
    menuContent: React.ReactNode;
    dropDownContent: React.ReactNode;
    align?: 'left' | 'right';
}

const DropDown: React.FC<IDropDown> = ({menuContent, dropDownContent, align = 'right'}) =>  {
    const ref = useRef(null);
    const [showContent, setShowContent] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener('click',handleDropDownClick);
        return () => {
            document.removeEventListener('click', handleDropDownClick)
        }
    }, [])

    const handleDropDownClick = (e: any) => {
        if (ref.current === e.target.closest('[data-dropdown-btn]')) {
            return;
        }
        setShowContent(false);
    }

    const toggleDropDown = () => {
        setShowContent(prev => !prev);
    }
    return (
        <div className='drop-down' ref={ref} data-dropdown-btn  onClick={toggleDropDown}>
            <div className="menu-content" >
                {menuContent}
            </div>
            <div className={`drop-down-content ${align} ${showContent  ? 'active': ''}`} data-dropdown>
                {dropDownContent}
            </div>
        </div>
    )
}
export default DropDown;