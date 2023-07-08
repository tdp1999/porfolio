import { Project } from '../interfaces/project.interface';

export const Projects: Project[] = [
    {
        id: 1,
        name: 'Portfolio',
        description:
            'My personal portfolio website (This site). Built with Angular 14.',
        technologies: ['Angular', 'TailwindCSS'],
        startDate: new Date(2023, 5, 9),
        endDate: null,
        projectCategory: 'Landings',
        projectType: 'Personal',
        projectSize: 'Small',
        mainFunctionality: [
            'Responsive Design',
            'Dark Mode',
            'Animations',
            'Contact Form',
            'SEO',
        ],
        thumbnail: {
            url: 'assets/images/projects/project-porfolio-250.webp',
            srcset: 'assets/images/projects/project-porfolio-250.webp 250w, assets/images/projects/project-porfolio-315.webp 315w, assets/images/projects/project-porfolio-440.webp 440w, assets/images/projects/project-porfolio-575.webp 575w',
            description: 'Portfolio',
        },
        demoLink: {
            url: 'https://thunderphong.com',
            label: 'thunderphong.com',
        },
        sourceCodeLink: {
            url: 'https://github.com/tdp1999/porfolio',
            label: 'Github',
            hide: true,
        },
        tags: ['Demo Available'],
    },
    {
        id: 2,
        name: 'Real Estate Agency ERP System',
        description:
            'Full scale ERP System for a large real estate agency in Singapore.',
        technologies: ['Angular', 'TailwindCSS', 'NestJS'],
        startDate: new Date(2022, 7, 22),
        endDate: null,
        projectCategory: 'ERP',
        projectType: 'Professional',
        projectSize: 'Large',
        mainFunctionality: [
            'Human Resource Management System (Agent Management, Promotion, Recruitment, etc.)',
            'Transaction Management System (Project Management, Resale Management, etc.)',
            'Financial Management System (Account Receivable Management, Account Payable Management, Billing Management, etc.)',
            'Reporting System (Finance Report, Agent Performance Report, etc.)',
            'Permission Management System (Role Management, User Management, etc.)',
            'Agent Portal (Agent Dashboard, Agent Profile, etc.)',
        ],
        clientDomain: 'Real Estate',
        clientLocation: 'Singapore',
        thumbnail: {
            url: 'assets/images/projects/erp-250.webp',
            srcset: 'assets/images/projects/erp-250.webp 250w, assets/images/projects/erp-315.webp 315w, assets/images/projects/erp-440.webp 440w, assets/images/projects/erp-575.webp 575w',
            description: 'ERP System Websites',
        },
    },
    {
        id: 3,
        name: 'Car Workshop Listing Websites',
        description:
            'An automobile marketplace website for connecting car owners with workshops for car servicing and repairs in Australia.',
        technologies: ['Angular', 'Bootstrap 5'],
        startDate: new Date(2021, 0, 1),
        endDate: new Date(2021, 4, 5),
        projectCategory: 'Miscellaneous',
        projectType: 'Professional',
        projectSize: 'Small',
        clientDomain: 'Automobile',
        clientLocation: 'Australia',
        mainFunctionality: [
            'Landing Page (Responsive Design, Multi Filtering, SEO, etc.)',
            'Provider Portal (Provider Dashboard, Provider Profile, etc.)',
            'Admin Portal (Dashboard, Provider Management, etc.)',
        ],
        thumbnail: {
            url: 'assets/images/projects/listing-250.webp',
            srcset: 'assets/images/projects/listing-250.webp 250w, assets/images/projects/listing-315.webp 315w, assets/images/projects/listing-440.webp 440w, assets/images/projects/listing-575.webp 575w',
            description: 'ERP System Websites',
        },
    },
    {
        id: 4,
        name: 'Solar Pool Heating Company Websites',
        description:
            'A Product Management System and Landing Page for a Solar Pool Heating Company in Australia.',
        technologies: ['Angular', 'Bootstrap 5'],
        startDate: new Date(2021, 0, 1),
        endDate: new Date(2021, 4, 5),
        projectCategory: 'Miscellaneous',
        projectType: 'Professional',
        projectSize: 'Small',
        clientDomain: 'Solar Pool Heating',
        clientLocation: 'Australia',
        mainFunctionality: [
            'Landing Page (Responsive Design, Multi Filtering, SEO, etc.)',
            'Admin Portal (Dashboard, Product Management, etc.)',
            'Trader Portal',
        ],
        thumbnail: {
            url: 'assets/images/projects/website-250.webp',
            srcset: 'assets/images/projects/website-250.webp 250w, assets/images/projects/website-315.webp 315w, assets/images/projects/website-440.webp 440w, assets/images/projects/website-575.webp 575w',
            description: 'ERP System Websites',
        },
    },
    {
        id: 5,
        name: 'Resto. Restaurant Landing Page',
        description:
            'A Simple Landing Page for an imaginary Restaurant using HTML, CSS and JavaScript.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        startDate: new Date(2021, 7, 12),
        endDate: new Date(2021, 7, 15),
        projectCategory: 'Landings',
        projectType: 'Personal',
        projectSize: 'Not Rated',
        mainFunctionality: ['Responsive Design'],
        demoLink: {
            url: 'https://pp-food.netlify.app/',
            label: 'Demo',
        },
        sourceCodeLink: {
            url: 'https://github.com/tdp1999/PP-Food',
            label: 'Github',
        },
        thumbnail: {
            url: 'assets/images/projects/website-250.webp',
            srcset: 'assets/images/projects/website-250.webp 250w, assets/images/projects/website-315.webp 315w, assets/images/projects/website-440.webp 440w, assets/images/projects/website-575.webp 575w',
            description: 'ERP System Websites',
        },
        tags: ['Demo Available'],
    },
];
