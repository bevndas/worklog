import {getData} from '../utils/storage';
import {useEffect, useState} from 'react';
const LIGHT_THEME = 'theme-light';
const DARK_THEME = 'theme-dark';
const useThemeToggle = () => {
    const theme = getData('theme') || '';
    const [currentTheme, setTheme] = useState(theme);

    useEffect(() => {
        handleThemeChange(currentTheme);
    }, [currentTheme])

    const handleThemeChange = (themeName: string) => {
        const body = document.getElementsByTagName('body')[0];
        if (themeName === LIGHT_THEME || themeName  === '') {
            if (body.classList.contains(DARK_THEME)) {
                body.classList.remove(DARK_THEME);
            }
            body.classList.add(LIGHT_THEME)
        }

        if (themeName === DARK_THEME) {
            if (body.classList.contains(LIGHT_THEME)) {
                body.classList.remove(LIGHT_THEME);
            }
            body.classList.add(DARK_THEME)
        }

    }
    return [currentTheme, setTheme]
}
export default useThemeToggle;