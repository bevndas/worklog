import React, {useState} from  'react';
import './Settings.scss'
import useThemeToggle from '../../hooks/useThemeToggle';

const Settings = () => {
    const [currentTheme, setTheme] =  useThemeToggle();
    const handleValueChange = (theme: string) => {
        // @ts-ignore
        setTheme(theme);
    }

    return  (
        <div className='page settings'>
            <p>Appearance:</p>
            <div className='theme-list'>
                <div className={`theme-item ${(currentTheme === 'theme-light') && 'selected'}`} onClick={()=>handleValueChange('theme-light')}>
                    Light
                </div>
                <div className={`theme-item ${(currentTheme === 'theme-dark') && 'selected'}`} onClick={()=>handleValueChange('theme-dark')}>
                    Dark
                </div>
            </div>
        </div>
    )
}
export default Settings;