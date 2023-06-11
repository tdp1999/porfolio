import { Menu } from '../interfaces/menu.interface';

// Navigation Data
export const MENU_DATA: Menu[] = [
    {
        id: 1,
        label: 'About',
        icon: 'fas fa-info-circle',
        route: '/home',
        fragment: 'about',
    },
    {
        id: 2,
        label: 'Experience',
        icon: 'fas fa-briefcase',
        route: '/home',
        fragment: 'experience',
    },
    {
        id: 3,
        label: 'Skills',
        icon: 'fas fa-laptop-code',
        route: '/home',
        fragment: 'skills',
    },
    {
        id: 4,
        label: 'Portfolio',
        icon: 'fas fa-briefcase',
        route: '/home',
        fragment: 'portfolio',
    },
    {
        id: 5,
        label: 'Contact',
        icon: 'fas fa-id-card',
        route: '/home',
        fragment: 'contact',
    },
];
