import {Menu} from './SideMenu.interface';

export const sideMenuData: Menu[] = [
    {
        id: 1,
        icon:'dashboard',
        url: '/dashboard',
        label: 'Dashboard'
    },
    {
        id: 2,
        icon:'leave',
        url: '/leaves',
        label: 'Leaves'
    },
    {
        id: 3,
        icon:'settings',
        url: '/settings',
        label: 'Settings'
    }
];