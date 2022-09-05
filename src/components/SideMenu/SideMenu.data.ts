import {Menu} from './SideMenu.interface';
import {MdSpaceDashboard, MdSnooze, MdSettings} from 'react-icons/md';

export const sideMenuData: Menu[] = [
    {
        id: 1,
        icon: 'dashboard',
        url: '/dashboard',
        label: 'Dashboard'
    },
    {
        id: 2,
        icon: 'leaves',
        url: '/leaves',
        label: 'Leaves'
    },
    {
        id: 3,
        icon: 'settings',
        url: '/settings',
        label: 'Settings'
    }
];