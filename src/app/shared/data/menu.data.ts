import { Menu } from '../interfaces/menu.interface';

// Navigation Data
export const MENU_DATA: Menu[] = [
    {
        id: 1,
        label: 'About',
        icon: 'fas fa-info-circle',
        route: './',
        fragment: 'about',
    },
    {
        id: 2,
        label: 'Experience',
        icon: 'fas fa-briefcase',
        route: '',
        fragment: 'experiences',
    },
    {
        id: 3,
        label: 'Skills',
        icon: 'fas fa-laptop-code',
        route: './',
        fragment: 'skills',
    },
    {
        id: 4,
        label: 'Projects',
        icon: 'fas fa-briefcase',
        route: './',
        fragment: 'projects',
    },
    {
        id: 5,
        label: 'Contact',
        icon: 'fas fa-id-card',
        route: './',
        fragment: 'contact',
    },
];
