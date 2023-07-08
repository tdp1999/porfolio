import { Menu } from '../interfaces/menu.interface';

// Navigation Data
export const MENU_DATA: Menu[] = [
    {
        id: 1,
        label: 'menu.about',
        icon: 'fas fa-info-circle',
        route: '',
        fragment: 'about',
        active: false,
    },
    {
        id: 2,
        label: 'menu.experience',
        icon: 'fas fa-briefcase',
        route: '',
        fragment: 'experiences',
        active: false,
    },
    {
        id: 3,
        label: 'menu.skills',
        icon: 'fas fa-laptop-code',
        route: '',
        fragment: 'skills',
        active: false,
    },
    {
        id: 4,
        label: 'menu.projects',
        icon: 'fas fa-briefcase',
        route: '',
        fragment: 'projects',
        active: false,
    },
    {
        id: 5,
        label: 'menu.contact',
        icon: 'fas fa-id-card',
        route: '',
        fragment: 'contact',
        active: false,
    },
];
